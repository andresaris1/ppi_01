from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework_gis.fields import GeometryField
from ..models import BikeParking

class BikeParkingSerializer(GeoFeatureModelSerializer):

    coordinates = GeometryField()
    class Meta:
        model = BikeParking
        geo_field = 'coordinates'
        fields = "__all__"
