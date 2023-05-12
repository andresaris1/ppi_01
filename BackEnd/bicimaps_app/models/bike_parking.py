from django.contrib.gis.db import models


class BikeParking(models.Model):
    parking_id = models.CharField(max_length=100, primary_key=True) # SI
    coordinates = models.PointField(srid=4326) # SI
    rating = models.IntegerField(null=True, blank=True)
    objects = models.Manager()

    def __str__(self):
        return self.name