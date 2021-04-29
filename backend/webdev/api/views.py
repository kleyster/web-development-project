from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated

from api.serializers import ProductSerializer
from api.models import Category, Product

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer