from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from ..models import BikeParking
from ..serializers import BikeParkingSerializer



class BikeParkingListView(APIView):
    def get(self, request):
        try:
            bike_parking = BikeParkingSerializer(BikeParking.objects.all(), many=True)
            return Response(bike_parking.data, status=status.HTTP_200_OK)
        except Exception as error:
            return Response({error: str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            
    
