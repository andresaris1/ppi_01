from ..models.bike_ways import BikeWays
from rest_framework.views import APIView
from ..serializers.bike_way_serializer import BikeWaysListSerializer
from rest_framework.response import Response
from rest_framework import status



class BikeWaysListView(APIView):
    def get(self, request):
        bike_ways = BikeWaysListSerializer(BikeWays.objects.all(), many=True)
        return Response(bike_ways.data, status=status.HTTP_200_OK)
    


