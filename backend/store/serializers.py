from rest_framework import serializers
from user.models import UserProfile
from .models import Cart, CartItem, OrderItem, Product,Category
from django.contrib.auth.models import User
from user.models import Address

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = '__all__'
       

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.product_name', read_only=True)
    product_price = serializers.DecimalField(source='product.price',read_only=True, max_digits=10 , decimal_places=3)
    product_image = serializers.ImageField(source='product.image', read_only=True)

    class Meta:
        model = CartItem
        fields= '__all__'

class CartSerializer(serializers.ModelSerializer):
    items =  CartItemSerializer(many=True,read_only=True)
    total = serializers.ReadOnlyField()

    class Meta:
        model = Cart
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields ='__all__'



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','is_superuser','is_staff','first_name','last_name']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = "__all__"


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username','email','password','password2']

    def validate(self,data):
        if data['password'] != data['password2'] :
            raise serializers.ValidationError("password does not match")
        return data
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username= validated_data['username'],
            email= validated_data['email'],
            password= validated_data['password']
        )
        return user
    
class AddressSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer

    class Meta:
        model = Address
        fields= '__all__'