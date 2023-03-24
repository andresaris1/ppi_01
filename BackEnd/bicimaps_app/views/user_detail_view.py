from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializers.user_serializer import UserDetailSerializer

class UserDetailView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_authenticated = request.user
        serializer = UserDetailSerializer(user_authenticated)
        return Response(serializer.data, status=status.HTTP_200_OK)
