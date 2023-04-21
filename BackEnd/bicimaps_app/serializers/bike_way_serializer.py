from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework_gis.fields import GeometryField
from ..models.bike_ways import BikeWays
from rest_framework.serializers import ModelSerializer

class BikeWaysCreationSerializer(GeoFeatureModelSerializer):
    bike_way = GeometryField()

    class Meta:
        model = BikeWays
        geo_field = "bike_way"
        fields = "__all__"


class BikeWaysListSerializer(ModelSerializer):

    class Meta:
        model = BikeWays
        fields = "__all__"
