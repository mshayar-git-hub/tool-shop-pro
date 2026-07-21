from django.db import models
from django.contrib.auth.models import User
from user.models import UserProfile, Address

# Create your models here.
class Category(models.Model):
    cat_name = models.CharField(unique=True, max_length=50)
    slug = models.SlugField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.cat_name
    

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=70)
    description = models.TextField(blank = True)
    price = models.DecimalField(max_digits=10 , decimal_places=3)
    image = models.ImageField(upload_to='products/',blank=True)
    trending = models.BooleanField(default=False)
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name
    

# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     phone_no = models.CharField(max_length=15)
#     address = models.TextField(max_length=500)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.user.username
    


class Order (models.Model):
    PAYMENT_CHOICE = {
        ('COD','COD'),
        ('ONLINE','ONLINE'),
    }
    STATUS_CHOICE ={
        ('pending','Pending'),
        ('delivered','Delivered'),
        ('cancelled','Cancelled'),
    }

    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE , blank=True , null=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True , null=True)
    payment_method = models.CharField(max_length=50, choices= PAYMENT_CHOICE , default='COD' )
    delivery_method = models.CharField(max_length=100)
    total_amount = models.DecimalField(max_digits=10, decimal_places=3)
    status = models.CharField(max_length=50, choices=STATUS_CHOICE,default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.id}"



class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE,related_name='items')   
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField(default=1)
    price = models.DecimalField(max_digits=10 , decimal_places=3)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.product_name}"
    

class Cart (models.Model):
    user_profile = models.ForeignKey(UserProfile,on_delete=models.CASCADE,null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if self.user_profile.user:
            return f"Cart {self.id} for {self.user_profile.user.username}"
        else:
            return "Guest User"
    
    @property
    def total(self):
        return sum(item.subtotal for item in self.items.all())

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.quantity} x {self.product.product_name}'
    
    @property
    def subtotal(self):
        return self.quantity * self.product.price