from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from user.models import Address, UserProfile
from .serializers import AddressSerializer, CartItemSerializer, CartSerializer, CategorySerializer, OrderItemSerializer, OrderSerializer, ProductSerializer, UserProfileSerializer
from .models import Cart, CartItem, Category, Order, OrderItem, Product
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, UserSerializer 

# Create your views here.
class Category_generic(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class Product_generic(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class Single_Product_generic(generics.RetrieveAPIView):
    try:
        queryset = Product.objects.all()
        serializer_class = ProductSerializer
        lookup_field = "pk"
    except Product.DoesNotExist:
        Response ({'error':'not exist'}, status=404 )

class get_cart_generic(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CartSerializer

    def get_object(self):
        user_profile = UserProfile.objects.get(user = self.request.user)
        cart, created = Cart.objects.get_or_create(user_profile=user_profile)
        return cart

class add_to_cart(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class =  CartSerializer

    def post(self, request):

        product_id = request.data.get("product_id")

        if not product_id:
            return Response(
                {"error": "Product ID is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        
        user_profile=UserProfile.objects.get(user=request.user)
        cart, created = Cart.objects.get_or_create(user_profile=user_profile)

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product
        )

        if not created:
            cart_item.quantity += 1
            cart_item.save()

        serializer = CartSerializer(cart)

        return Response(
            {
                "message": "Product added to cart",
                "cart": serializer.data
            },
            status=status.HTTP_200_OK
        )
    
class UpdateInCart(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class= CartSerializer

    def post(self,request):
        item_id = request.data.get('item_id')
        quantity = request.data.get('quantity')

        if not item_id or quantity is None:
            return Response({'message':'Item ID or Quantity Not found'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            item = CartItem.objects.get(id=item_id)
            if int(quantity) < 1:
                item.delete()
                return Response({"message":"item deleted"},status=status.HTTP_200_OK)
            
            item.quantity=quantity
            item.save()
            serializer = CartItemSerializer(item)
            return Response({"message":"cart updated successfully" , "cart":serializer.data})
        except CartItem.DoesNotExist:
            return Response ({"message":"cart item not found"},status=status.HTTP_400_BAD_REQUEST)
    

class RemoveFromCart(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CartSerializer

    def post(self, request):

        product_id = request.data.get("product_id")

        if not product_id:
            return Response(
                {"error": "Product ID is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            cart = Cart.objects.get(user=request.user)
        except Cart.DoesNotExist:
            return Response(
                {"error": "Cart not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            cart_item = CartItem.objects.get(
                cart=cart,
                product=product
            )
        except CartItem.DoesNotExist:
            return Response(
                {"error": "Product is not in the cart"},
                status=status.HTTP_404_NOT_FOUND
            )

        cart_item.delete()

        serializer = CartSerializer(cart)

        return Response(
            {
                "message": "Item removed successfully",
                "cart": serializer.data,
            },
            status=status.HTTP_200_OK,
        )
    
class Create_order(APIView):
    permission_classes  = [IsAuthenticated]
    def post(self,request):
        try:
            data = request.data 
            user_profile = UserProfile.objects.get(user=request.user)
            address_id = data.get("address_id")
            address = Address.objects.get(id=address_id, user_profile=user_profile)
            payment_method = data.get("payment_method", "COD")
            delivery_method = data.get("delivery_method")

            cart ,created = Cart.objects.get_or_create(user_profile=user_profile)

            if not cart or not cart.items.exists():
                return Response ({'message':"items not found"}, status = status.HTTP_400_BAD_REQUEST)
            
            total = sum(float(item.product.price) * item.quantity for item in cart.items.all())

            # create order
            order = Order.objects.create(
                user_profile = user_profile,
                address = address,
                payment_method=payment_method,
                delivery_method=delivery_method,
                total_amount=total,
            )

            # create order item
            for item in cart.items.all():
                orderItem = OrderItem.objects.create(
                    order = order,
                    product = item.product,
                    quantity = item.quantity,
                    price = item.product.price,
                )

            # clear Cart
            cart.items.all().delete()
            return Response({'message':"cart cleared",'order id' : order.id},status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error':str(e)},status=status.HTTP_400_BAD_REQUEST)
        
class Show_order(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        order = Order.objects.all().order_by('-id')
        serializer = OrderSerializer(order,many=True)
        return Response(serializer.data ,status=status.HTTP_200_OK)
    

class register_view(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        serializer = RegisterSerializer(data = request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message":"user created successfully" , "user" : UserSerializer(user).data},status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class User_view(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self,request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)    
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    
class All_User(APIView):
    def get(self, request):
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)
    
class AddressView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        user_profile = UserProfile.objects.get(user=request.user)
        address = Address.objects.filter(user_profile=user_profile)

        serializer = AddressSerializer(address, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            return Response({'message':'address created Successfully.'},status=status.HTTP_201_CREATED)