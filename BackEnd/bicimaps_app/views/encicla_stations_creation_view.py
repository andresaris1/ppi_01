from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from ..serializers.encicla_stations_serializer import EnciclaCreationSerializer


class EnciclaStationsCreationView(APIView):

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = EnciclaCreationSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    