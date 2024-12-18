from rest_framework import generics
from .models import Fertilizer, SoilAnalysisRequest
from .serializers import FertilizerSerializer, SoilAnalysisRequestSerializer


class FertilizerListCreateView(generics.ListCreateAPIView):
    queryset = Fertilizer.objects.all()
    serializer_class = FertilizerSerializer

class SoilAnalysisRequestCreateView(generics.CreateAPIView):
    queryset = SoilAnalysisRequest.objects.all()
    serializer_class = SoilAnalysisRequestSerializer
