from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate, get_user_model
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from django.utils.timezone import now
from .models import CustomUser


class RegisterSerializer(serializers.ModelSerializer):
    # Serializer para registrar nuevos usuarios.
    # Valida que las contraseñas coincidan y cumplan con las políticas de seguridad.
    
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True)

    # Definimos manualmente el campo email, para poder personalizar el mensaje de error de unique.
    email = serializers.EmailField(
        required=True,
        validators=[
            UniqueValidator(
                queryset=CustomUser.objects.all(),
                message="El email ya se encuentra vinculado a una cuenta"
            )
        ]
    )
    
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError("Las contraseñas no coinciden.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(**validated_data)
        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user is None:
            raise serializers.ValidationError({'detail': 'Usuario o contraseña inválidos'})
        
        if not user.is_active:
            raise serializers.ValidationError({'detail': 'La cuenta está desactivada'})
        
        
        user.last_login = now()
        user.save(update_fields=['last_login'])
        
        
        # Llamamos al super para obtener los tokens (access, refresh)
        data = super().validate(data)
        
        # Agregamos info adicional del usuario
        data['username'] = user.username
        data['email'] = user.email
        data['gender'] = user.gender
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name

        return data