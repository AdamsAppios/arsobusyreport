from django.urls import path, include
from .views import index, free

urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('labangon', free),
    path('talamban', free),
    path('formex', index),
    path('todos', index),
    path('moncount', index),
    path('rtr', index),
    path(r'join/1', index),
    path('', include('busyCctvCounter.urls')),
    path(r'cctv/talamban-model/', free),
    path('rtab', index)
]
