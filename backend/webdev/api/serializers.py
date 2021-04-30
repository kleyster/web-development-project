from rest_framework import serializers

from api.models import Category, Product

class CategorySerializer2(serializers.ModelSerializer):
    # name = serializers.CharField()

    class Meta:
        model = Category
        fields = ('id', 'name',)


class ProductSerializer2(serializers.ModelSerializer):
    # category = CategorySerializer2(read_only=True)

    class Meta:
        model = Product
        fields = ('category','name', 'id', 'description', 'url','price',)


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance

class ProductSerializer(serializers.Serializer):
    cat_id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    id = serializers.IntegerField(read_only=True)
    description = serializers.CharField()
    url = serializers.CharField()
    price = serializers.FloatField()
    

    def create(self, validated_data):
        product = Product.objects.create(name=validated_data['name'])
        return product

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance
        

