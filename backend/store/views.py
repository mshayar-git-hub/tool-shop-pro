from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from .serializers import CartSerializer, CategorySerializer, ProductSerializer
from .models import Cart, CartItem, Category, Product

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

class get_cart_generic(generics.ListAPIView):
    serializer_class = CartSerializer

    def get_queryset(self):
        cart, created = Cart.objects.get_or_create(user=None)
        return Cart.objects.filter(id=cart.id)

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

        if cart_item.quantity > 1:
            cart_item.quantity -= 1
            cart_item.save()
        else:
            cart_item.delete()

        serializer = CartSerializer(cart)

        return Response(
            {
                "message": "Product removed from cart",
                "cart": serializer.data
            },
            status=status.HTTP_200_OK
        )