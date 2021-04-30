from django.contrib import admin
from django.urls import path,include
from api.views import ProductListAPIView, ProductDetailAPIView, ProductListFBV, ProductDetailFBV
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('login/',obtain_jwt_token),
    path('categories/<int:category_id>',ProductListFBV),
    path('categories/<int:category_id>/<int:uni_id>',ProductDetailFBV)
]
