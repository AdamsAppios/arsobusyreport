
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views
from accounts.views import (login_view)
router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('login/', login_view),
    path('', include('frontend.urls')),
    path('api/', include('rest_framework.urls')),
]
