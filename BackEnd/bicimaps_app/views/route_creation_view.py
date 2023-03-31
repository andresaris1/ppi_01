from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser
from ..serializers.route_serializer import RouteCreationSerializer
from django.contrib.auth import get_user_model

class RouteCreationView(APIView):
    
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:

            User = get_user_model()
            user_instance = User.objects.get(email = request.user.email)
            data = JSONParser().parse(request)
            serializer = RouteCreationSerializer(data = data)

            if serializer.is_valid():
                serializer.validated_data['user_id'] = user_instance
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        except Exception as err:
            return Response({'content': 'Error creando la ruta','message': str(err)}, status=status.HTTP_400_BAD_REQUEST)