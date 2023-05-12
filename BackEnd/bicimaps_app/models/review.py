from django.contrib.gis.db import models
from .user import User
from .bike_ways import BikeWays
from .encicla_stations import EnciclaStations
from .bike_parking import BikeParking

class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, to_field="email" ,on_delete=models.CASCADE, null=True, blank=True)
    review_location = models.PointField(geography=True, srid=4326, blank=True, null=True)
    review = models.CharField(max_length=200, null=False)
    created_at = models.DateField(auto_now=True)
    encicla_id = models.ForeignKey(EnciclaStations, on_delete=models.CASCADE, null=True, blank=True)
    bike_way_id = models.ForeignKey(BikeWays, on_delete=models.CASCADE, null=True, blank=True)
    bike_parking_id = models.ForeignKey(BikeParking, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.review