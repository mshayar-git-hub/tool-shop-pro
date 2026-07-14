
from django.urls import path

from . import views
from rest_framework_simplejwt.views import TokenObtainPairView , TokenRefreshView

urlpatterns = [
    path('register/', views.register_view.as_view()),
    path('token/', TokenObtainPairView.as_view() , name = 'token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/',views.User_view.as_view()),
    path('all_users/',views.All_User.as_view()),

    path('categories/',views.Category_generic.as_view()),
    path('products/',views.Product_generic.as_view()),
    path('products/<int:pk>/', views.Single_Product_generic.as_view()),
    path('cart/',views.get_cart_generic.as_view()),
    path('cart/add_cart/',views.add_to_cart.as_view()),
    path('cart/remove_cart/',views.RemoveFromCart.as_view()),
    path('cart/update_cart/',views.UpdateInCart.as_view()),
    path('orders/create/',views.Create_order.as_view()),
    path('orders/show/',views.Show_order.as_view()),
]