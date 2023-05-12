from django.contrib.gis.db import models

class BikeWays(models.Model):
    way_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    bike_way = models.LineStringField(srid=4326, null=True, blank=True)
    img_src = models.CharField(max_length=200, null=True, blank=True)
    label = models.CharField(max_length=200, null=True, blank=True)
    lenght = models.FloatField(null=True, blank=True)
    line_type = models.CharField(max_length=100, null=True, blank=True)
    objects = models.Manager()

    def __str__(self):
        return self.name
