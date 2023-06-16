from django.contrib import admin

# Register your models here.
from .models import *


class TalambanModelAdmin(admin.ModelAdmin):
    list_display = ('date_monitored',)


class LabangonModelAdmin(admin.ModelAdmin):
    list_display = ('date_monitored',)


class KalimpioModelAdmin(admin.ModelAdmin):
    list_display = ('date_monitored',)


admin.site.register(TalambanModel, TalambanModelAdmin)
admin.site.register(LabangonModel, LabangonModelAdmin)
admin.site.register(KalimpioModel, KalimpioModelAdmin)
