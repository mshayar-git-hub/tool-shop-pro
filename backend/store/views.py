from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from .serializers import CartItemSerializer, CartSerializer, CategorySerializer, ProductSerializer
from .models import Cart, CartItem, Category, Order, OrderItem, Product
from rest_framework.views import APIView

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
    serializer_class = CartSerializer

    def get_object(self):
        cart, created = Cart.objects.get_or_create(user=None)
        return cart

class add_to_cart(generics.UpdateAPIView):
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

        cart, created = Cart.objects.get_or_create(user=None)

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
            cart = Cart.objects.get(user=None)
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
    def post(self,request):
        try:
            data = request.data 

            name = data.get('name')
            address = data.get('address')
            phone = data.get('phone')
            payment_method = data.get('payment_method')

            cart = Cart.objects.first()

            if not cart or not cart.items.exists():
                return Response ({'message':"items not found"}, status = status.HTTP_400_BAD_REQUEST)
            
            total = sum(float(item.product.price) * item.quantity for item in cart.items.all())

            # create order
            order = Order.objects.create(
                user = None,
                total_amount = total
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
        
