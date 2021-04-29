from rest_framework import serializers

from models import Category, Product

class CategorySerializer2(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Category
        fields = ('id', 'name',)


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer2(read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'category')