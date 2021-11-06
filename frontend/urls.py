from django.urls import path
from .views import index, free

urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('labangon', free),
    path('talamban',free),
    path('formex', index),
    path('todos',index),
    path('rtr',index),
    path('join/1', index),
    path('tabs',index)
]