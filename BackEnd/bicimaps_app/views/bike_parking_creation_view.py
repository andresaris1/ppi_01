from ..serializers import BikeParkingSerializer
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status


class BikeParkingView(APIView):

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = BikeParkingSerializer(data=data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
                
        except Exception as e:
            return Response({"detail": "Error al crear ruta.", "error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
