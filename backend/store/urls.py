
from django.urls import path

from . import views

urlpatterns = [
    path('categories/',views.Category_generic.as_view()),
    path('products/',views.Product_generic.as_view()),
    path('products/<int:pk>/', views.Single_Product_generic.as_view()),
    path('cart/',views.get_cart_generic.as_view()),
    path('cart/add_cart/',views.add_to_cart.as_view()),
    path('cart/remove_cart/',views.RemoveFromCart.as_view()),
]