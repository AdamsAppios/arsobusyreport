from rest_framework.routers import DefaultRouter
from .views import TalambanDataView, TalambanDataDetailView, LabangonDataView, LabangonDataDetailView, KalimpioDataView, KalimpioDataDetailView
from django.urls import path
from django.contrib.auth.decorators import login_required


urlpatterns = [
    # Talamban URLs
    path('api/talambansave/<str:date_monitored>/', login_required(TalambanDataView.as_view()),
         name='save_talamban_data'),
    path('api/talambanload/<str:date_monitored>/',
         login_required(TalambanDataDetailView.as_view()), name='load_talamban_data'),

    # Labangon URLs
    path('api/labangonsave/<str:date_monitored>/', login_required(LabangonDataView.as_view()),
         name='save_labangon_data'),
    path('api/labangonload/<str:date_monitored>/',
         login_required(LabangonDataDetailView.as_view()), name='load_labangon_data'),

    # Kalimpio URLs
    path('api/kalimpiosave/<str:date_monitored>/', login_required(KalimpioDataView.as_view()),
         name='save_kalimpio_data'),
    path('api/kalimpioload/<str:date_monitored>/',
         login_required(KalimpioDataDetailView.as_view()), name='load_kalimpio_data'),

]
