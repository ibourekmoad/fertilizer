from rest_framework import serializers
from .models import Fertilizer, SoilAnalysisRequest

class FertilizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = '__all__'

class SoilAnalysisRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoilAnalysisRequest
        fields = '__all__'
