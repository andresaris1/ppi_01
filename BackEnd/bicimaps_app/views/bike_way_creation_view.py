from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from ..serializers.bike_way_serializer import BikeWaysCreationSerializer


class BikeWaysCreationView(APIView):

    def post(self, request):

        try:
            data = JSONParser().parse(request)
            serializer = BikeWaysCreationSerializer(data=data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response({"detail": "Error al crear ruta.", "error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return Response({"detail": "Error al crear ruta.", "error": str(e)}, status=status.HTTP_400_BAD_REQUEST)