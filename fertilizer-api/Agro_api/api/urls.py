from django.urls import path
from .views import FertilizerListCreateView, SoilAnalysisRequestCreateView

urlpatterns = [
    path('fertilizers/', FertilizerListCreateView.as_view(), name='fertilizer-list-create'),
    path('soil-analysis/', SoilAnalysisRequestCreateView.as_view(), name='soil-analysis-create'),
]
