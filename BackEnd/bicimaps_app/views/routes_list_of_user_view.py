
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from ..models.route import Route
from ..serializers.route_serializer import RoutesListSerializer

class RoutesListView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            user_email = request.user.email
            routes_of_user = Route.objects.filter(user_id = user_email)
            serializer = RoutesListSerializer(routes_of_user, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as err:
            return Response({'content': 'Error obteniendo las rutas','message': str(err)}, status=status.HTTP_400_BAD_REQUEST)

