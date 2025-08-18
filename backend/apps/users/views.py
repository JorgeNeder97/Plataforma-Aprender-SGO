from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.views import TokenObtainPairView
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import generics, status, permissions
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer, CustomTokenObtainPairSerializer
from rest_framework.views import APIView
from django.conf import settings
from .models import CustomUser


class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


@ensure_csrf_cookie
@api_view(['GET'])
def get_csrf_token(request):
    return Response({'message': 'CSRF cookie set'})


class CustomTokenObtainPairView(TokenObtainPairView):
    # Usamos nuestro serializer custom (respuesta personalizada, validación login)
    serializer_class = CustomTokenObtainPairSerializer
    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        refresh_token = response.data.get("refresh")
        
        # Seteamos la cookie solo si está el refresh token
        if refresh_token:
            response.set_cookie(
                key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                value=refresh_token,
                httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"]
            )
            
            # Esto es opcional, para eliminar el token del body JSON (para no exponerlo)
            del response.data["refresh"]
        
        return response


class CookieTokenRefreshView(APIView):
    
    def post(self, request):
        refresh_token = request.COOKIES.get(settings.SIMPLE_JWT["AUTH_COOKIE"])
        if not refresh_token:
            return Response({"error": "No se encontró el refresh token en la cookie."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            refresh = RefreshToken(refresh_token)
            new_access = str(refresh.access_token)
            user_id = refresh['user_id']
            user = CustomUser.objects.get(id=user_id)
            return Response({
                "username": user.username,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "gender": user.gender,
                "access": new_access, 
            })
        except TokenError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)



class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        try:
            refresh_token = request.COOKIES.get(settings.SIMPLE_JWT["AUTH_COOKIE"])
            
            if not refresh_token:
                return Response({"error": "No se encontró el refresh token en cookies."}, status=status.HTTP_400_BAD_REQUEST)
            
            token = RefreshToken(refresh_token)
            token.blacklist()
            
            response = Response({"detail": "Sesión cerrada correctamente."}, status=status.HTTP_205_RESET_CONTENT)
            response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE"])
            response.delete_cookie(settings.CSRF_COOKIE_NAME)
            return response            
        except Exception as e:
            return Response({"error": "Token inválido o faltante."}, status=status.HTTP_400_BAD_REQUEST)


# Ejemplo de una vista protegida

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": f"Hola, {request.user.username}, este es tu dashboard."})
