import django_filters
from .models import Order, Product

class ProductFilter(django_filters.FilterSet):
    class Meta:
        model = Product
        fields = {
            "category": ["exact"],
        }


class OrderFilter(django_filters.FilterSet):
    class Meta:
        model = Order
        fields = {
            "status" : ["exact"],
        }