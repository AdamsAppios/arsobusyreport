from rest_framework import serializers
from .models import TalambanModel, LabangonModel, KalimpioModel

class TalambanModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TalambanModel
        fields = '__all__'

class LabangonModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabangonModel
        fields = '__all__'

class KalimpioModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = KalimpioModel
        fields = '__all__'