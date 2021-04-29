from django.contrib import admin
from django.urls import path,include
from api.views import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    # path('login/',),
    path('categories/<int:category_id>',ProductListAPIView.as_view()),
    path('categories/<int:category_id>/<int:product_id>',ProductDetailAPIView.as_view())
]
