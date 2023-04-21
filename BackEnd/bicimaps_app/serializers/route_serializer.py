from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework_gis.fields import GeometryField
from rest_framework.serializers import ModelSerializer
from ..models.route import Route

class RouteCreationSerializer(GeoFeatureModelSerializer):
    route = GeometryField()

    class Meta:
        model = Route
        geo_field = "route"
        fields = ['name', 'route', 'description']

class RoutesListSerializer(ModelSerializer):
    class Meta:
        model = Route
        fields = ['route_id', 'name', 'route', 'description', 'user_id', 'review_id']
    
