from django.contrib.gis.db import models
from .user import User


class Place(models.Model):
    place_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    coordinates = models.PointField(srid=4326)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    objects = models.Manager()

    def __str__(self):
        return self.name