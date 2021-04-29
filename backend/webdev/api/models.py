from django.db import models

# Create your models here.

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name =  models.CharField(max_length=200)
    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


    def to_json(self):
        return {
            'name' : self.name
        }

    def __str__(self):
        return f'{self.name}'


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name =  models.CharField(max_length=200)
    description =  models.TextField()
    price =  models.FloatField(default=0)
    category =  models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"


    def to_json(self):
        return {
            'name' : self.name,
            'price' : self.price,
            'category' : self.category
        }

    def __str__(self):
        return f'{self.name}'