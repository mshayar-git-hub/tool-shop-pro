from django.contrib import admin

from .models import Cart, CartItem, Category, Order, OrderItem, Product

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields= {'slug':('cat_name',)}


admin.site.register(Category,CategoryAdmin)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Cart)
admin.site.register(CartItem)