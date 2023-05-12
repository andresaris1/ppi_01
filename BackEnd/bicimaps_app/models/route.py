# from django.db import models
from django.contrib.gis.db import models
from .user import User

class Route(models.Model):
    route_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=100, null=False)
    route = models.LineStringField(geography=True ,srid=4326, null=False)
    description = models.CharField(max_length=200, null=True, blank=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    objects = models.Manager()
    
    def __str__(self):
        return self.name


