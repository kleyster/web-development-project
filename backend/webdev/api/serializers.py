from rest_framework import serializers

from api.models import Category, Product

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


# class CategorySerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()

#     def create(self, validated_data):
#         category = Category.objects.create(name=validated_data['name'])
#         return category

#     def update(self, instance, validated_data):
#         instance.name = validated_data['name']
#         instance.save()
#         return instance

# class ProductSerializer(serializers.Serializer):
#     category = serializers.IntegerField(read_only=True)

#     def create(self, validated_data):
#         category = Product.objects.create(name=validated_data['name'])
#         return category

#     def update(self, instance, validated_data):
#         instance.name = validated_data['name']
#         instance.save()
#         return instance

