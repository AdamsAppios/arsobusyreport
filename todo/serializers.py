from rest_framework import serializers
from .models import Todo

from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

class TodoSerializer(serializers.ModelSerializer):
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
