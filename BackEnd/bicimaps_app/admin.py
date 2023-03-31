from django.contrib import admin
from .models.user import User
from .models.route import Route
from .models.review import Review
from .models.bike_parking import BikeParking
from .models.place import Place
from .models.encicla_stations import EnciclaStations
from .models.bike_repairs import BikeRepairs

admin.site.register(Route)
admin.site.register(User)
admin.site.register(Review)
admin.site.register(BikeParking)
admin.site.register(Place)
admin.site.register(EnciclaStations)
admin.site.register(BikeRepairs)
