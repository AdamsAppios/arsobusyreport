from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('labangon', index),
    path('talamban',index),
    path('formex', index),
    path('5thwodke/todos',index),
    path('rtr',index),
    path('join/1', index)
]