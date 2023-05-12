from .bike_ways import BikeWays
from django.contrib.gis.db import models

class BikeWaysMls(models.Model):
    way_id = models.AutoField(primary_key=True)
    bike_way_mls = models.MultiLineStringField(srid=4326, null=True, blank=True)
    bike_way_id = models.ForeignKey(BikeWays, on_delete=models.CASCADE, null=False)
    objects = models.Manager()

    def __str__(self):
        return self.name

