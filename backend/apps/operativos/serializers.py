from rest_framework import serializers
from .models import Escuela, Veedor, Coordinador, Aplicador

class EscuelaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escuela
        fields = "__all__"
