from django.db import models

class Fertilizer(models.Model):
    name = models.CharField(max_length=255)
    composition = models.CharField(max_length=255)
    image_path = models.URLField()

    def __str__(self):
        return self.name

class SoilAnalysisRequest(models.Model):
    field_name = models.CharField(max_length=255)
    crop_type = models.CharField(max_length=255)
    field_size = models.DecimalField(max_digits=10, decimal_places=2)  # Acres
    issues = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Request for {self.field_name}"
