from django.contrib.auth import get_user_model
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

User = get_user_model()

class UserCreationView(APIView):
        
    def post(self, request):
        data = request.data
        email = data["email"]
        # try:
        #     validate_email(email)

        # except ValidationError:
        #     content = {"detail": "Email inválido.", "error": ValidationError}
        #     return Response(content, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email = email).exists():
            content = {
                        "error": "Usuario con el email dado ya existe.",
                        "error_code": "40"
                       }
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            User.objects.create_user(
                email=data["email"], 
                first_name=data["first_name"],
                last_name=data["last_name"],
                has_bike=data["has_bike"],
                password=data["password"],
            )
        except Exception as e:
            content = {
                        "error": "Error inesperado en el servidor",
                        "error_body": str(e),
                        "error_code":"50"
                       }
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response({"success": "Usuario creado exitosamente."}, status=status.HTTP_201_CREATED)





