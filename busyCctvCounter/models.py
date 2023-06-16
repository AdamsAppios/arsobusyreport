from django.db import models
from django.utils import timezone

# Create your models here.


class TalambanModel(models.Model):
    date_monitored = models.DateField(primary_key=True, default=timezone.now, blank=False, null=False)
    cctvTime = models.CharField(max_length=50, blank=True, null=True)
    dealer = models.CharField(max_length=50, blank=True, null=True)
    pickup = models.CharField(max_length=50, blank=True, null=True)
    rnd = models.IntegerField(default=0, blank=True, null=True)
    square = models.CharField(max_length=50, blank=True, null=True)
    squareSmall = models.CharField(max_length=50, blank=True, null=True)
    small = models.CharField(max_length=50, blank=True, null=True)
    dayparts = models.TextField(blank=True, null=True)
    suspicious = models.TextField(blank=True, null=True)


class LabangonModel(models.Model):
    date_monitored = models.DateField(primary_key=True, default=timezone.now, blank=False, null=False)
    cctvTime = models.CharField(max_length=50, blank=True, null=True)
    dealer = models.CharField(max_length=50, blank=True, null=True)
    pickup = models.CharField(max_length=50, blank=True, null=True)
    rnd = models.IntegerField(default=0, blank=True, null=True)
    square = models.CharField(max_length=50, blank=True, null=True)
    squareSmall = models.CharField(max_length=50, blank=True, null=True)
    small = models.CharField(max_length=50, blank=True, null=True)
    dayparts = models.TextField(blank=True, null=True)
    suspicious = models.TextField(blank=True, null=True)


class KalimpioModel(models.Model):
    date_monitored = models.DateField(primary_key=True, default=timezone.now, blank=False, null=False)
    cctvTime = models.CharField(max_length=50, blank=True, null=True)
    dealer = models.CharField(max_length=50, blank=True, null=True)
    pickup = models.CharField(max_length=50, blank=True, null=True)
    rnd = models.IntegerField(default=0, blank=True, null=True)
    square = models.CharField(max_length=50, blank=True, null=True)
    squareSmall = models.CharField(max_length=50, blank=True, null=True)
    small = models.CharField(max_length=50, blank=True, null=True)
    dayparts = models.TextField(blank=True, null=True)
    suspicious = models.TextField(blank=True, null=True)