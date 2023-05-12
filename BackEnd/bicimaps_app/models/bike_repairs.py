from django.contrib.gis.db import models

class BikeRepairs(models.Model):
    bike_repair_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    coordinates = models.PointField(srid=4326)
    objects = models.Manager()

    def __str__(self):
        return self.name