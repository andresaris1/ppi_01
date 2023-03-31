from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
# from django.contrib.gis.geos import GEOSGeometry
from ..serializers.review_serializer import ReviewCreationSerializer
from django.contrib.auth import get_user_model
from django.contrib.gis.geos import Point
# from django.http import JsonResponse
from rest_framework.parsers import JSONParser

from ..models.review import Review

class ReviewCreationView(APIView):

    permission_classes = [ IsAuthenticated, ]

    def post(self, request):

        User = get_user_model()
        user_instance = User.objects.get(email = request.user.email)
        data = JSONParser().parse(request)
        serializer = ReviewCreationSerializer(data=data)

        if serializer.is_valid():
            serializer.validated_data["user_id"] = user_instance
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response({"detail": "Error al crear review.", "error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
       