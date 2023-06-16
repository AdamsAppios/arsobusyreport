from django.http import Http404
from rest_framework import status
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import TalambanModel, LabangonModel, KalimpioModel

from .serializers import TalambanModelSerializer, LabangonModelSerializer, KalimpioModelSerializer

class TalambanDataView(APIView):
    def get_object(self, date_monitored):
        try:
            return TalambanModel.objects.get(date_monitored=date_monitored)
        except TalambanModel.DoesNotExist:
            raise Http404

    def get(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        serializer = TalambanModelSerializer(obj)
        return Response(serializer.data)

    def post(self, request, date_monitored, format=None):
        try:
            obj = self.get_object(date_monitored)
            serializer = TalambanModelSerializer(obj, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Http404:
            serializer = TalambanModelSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(date_monitored=date_monitored)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        serializer = TalambanModelSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TalambanDataDetailView(RetrieveAPIView):
    queryset = TalambanModel.objects.all()
    serializer_class = TalambanModelSerializer
    lookup_field = 'date_monitored'

class LabangonDataView(APIView):
    def post(self, request, date_monitored, format=None):
        try:
            obj = self.get_object(date_monitored)
            serializer = LabangonModelSerializer(obj, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Http404:
            serializer = LabangonModelSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(date_monitored=date_monitored)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_object(self, date_monitored):
        try:
            return LabangonModel.objects.get(date_monitored=date_monitored)
        except LabangonModel.DoesNotExist:
            raise Http404

    def get(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        serializer = LabangonModelSerializer(obj)
        return Response(serializer.data)

    def put(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        serializer = LabangonModelSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LabangonDataDetailView(RetrieveAPIView):
    queryset = LabangonModel.objects.all()
    serializer_class = LabangonModelSerializer
    lookup_field = 'date_monitored'


class KalimpioDataView(APIView):
    def post(self, request, date_monitored, format=None):
        try:
            obj = self.get_object(date_monitored)
            serializer = KalimpioModelSerializer(obj, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Http404:
            serializer = KalimpioModelSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(date_monitored=date_monitored)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_object(self, date_monitored):
        try:
            return KalimpioModel.objects.get(date_monitored=date_monitored)
        except KalimpioModel.DoesNotExist:
            raise Http404

    def get(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        serializer = KalimpioModelSerializer(obj)
        return Response(serializer.data)

    def put(self, request, date_monitored, format=None):
        obj = self.get_object(date_monitored)
        serializer = KalimpioModelSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class KalimpioDataDetailView(RetrieveAPIView):
    queryset = KalimpioModel.objects.all()
    serializer_class = KalimpioModelSerializer
    lookup_field = 'date_monitored'
