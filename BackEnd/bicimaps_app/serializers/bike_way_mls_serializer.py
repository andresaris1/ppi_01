from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework_gis.fields import GeometryField
from ..models.bike_ways_mls import BikeWaysMls

class BikeWaysMLSCreationSerializer(GeoFeatureModelSerializer):
    bike_way_mls = GeometryField()

    class Meta:
        model = BikeWaysMls
        geo_field = "bike_way_mls"
        fields = "__all__"