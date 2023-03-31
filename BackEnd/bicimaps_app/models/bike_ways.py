from django.contrib.gis.db import models
from .review import Review

class BikeWays(models.Model):
    way_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    bike_way = models.LineStringField(srid=4326)
    img_src = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    rating = models.FloatField(null=True, blank=True)
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE, null=True)
    objects = models.Manager()

    def __str__(self):
        return self.name
