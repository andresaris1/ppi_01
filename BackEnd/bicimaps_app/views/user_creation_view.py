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

        try:
            validate_email(email)

        except ValidationError:

            content = {"detail": "Email inválido.", "error": ValidationError}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
        
        password = data["password"]
        password_confirmation = data["password_confirmation"]

        if len(password) < 8:
            content = {"detail": "La contraseña debe tener al menos 8 caracteres."}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)

        if password != password_confirmation:
            content = {"detail": "Las contraseñas no coinciden."}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email=email).exists():
            content = {"detail": "Usuario con el email dado ya existe."}
            return Response(content, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            User.objects.create_user(
                email=data["email"], 
                first_name=data["first_name"],
                last_name=data["last_name"],
                has_bike=data["has_bike"],
                birth_date=data["birth_date"], 
                occupation=data["occupation"],
                university=data["university"],
                password=data["password"]
            )
        except Exception as e:
            content = {"detail": "Error inesperado en el servidor", "error": str(e)}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response({"detail": "Usuario creado exitosamente."}, status=status.HTTP_201_CREATED)





