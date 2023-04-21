from rest_framework_gis.serializers import GeoFeatureModelSerializer
from ..models.encicla_stations import EnciclaStations
from rest_framework_gis.fields import GeometryField

class EnciclaCreationSerializer(GeoFeatureModelSerializer):
    coordinates = GeometryField()
    class Meta:
        model = EnciclaStations
        geo_field = 'coordinates'
        fields = "__all__"
