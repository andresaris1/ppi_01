from django.contrib.gis.db import models
from .user import User
from .review import Review

class BikeRepairs(models.Model):
    bike_repair_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    coordinates = models.PointField(srid=4326)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE, null=False)
    objects = models.Manager()

    def __str__(self):
        return self.name