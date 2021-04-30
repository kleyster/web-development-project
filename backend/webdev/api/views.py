from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated
from django.http.response import JsonResponse 
from api.serializers import ProductSerializer2
from api.models import Category, Product

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse

from rest_framework.request import Request
from rest_framework.response import Response


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    permission_classes = (IsAuthenticated,)


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2

def ProductListFBV(request, category_id):
    try:
        category = Category.objects.get(id = category_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    products = Product.objects.filter(category = category)
    serializer = ProductSerializer2(products, many=True)
    return JsonResponse(serializer.data, safe=False)

def ProductDetailFBV(request, category_id, uni_id):
    try:
        product = Product.objects.filter(id = uni_id)
        category = Category.objects.filter(id = category_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message:': str(e)}, status=400)
    serializer = ProductSerializer2(product, many=True)
    return JsonResponse(serializer.data, safe=False)

    
