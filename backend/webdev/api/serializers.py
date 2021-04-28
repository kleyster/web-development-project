from rest_framework import serializers

from api.models import Category, Product


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance


class Product2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description')


class CategorySerializer2(serializers.ModelSerializer):
    name = serializers.CharField()

    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # products = serializers.StringRelat    edField(many=True, read_only=True)

    # products = Product2Serializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name',)
        # read_only_fields = ('name',)


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer2(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'category', 'category_id',)