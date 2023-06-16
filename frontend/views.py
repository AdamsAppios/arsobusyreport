from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

def index(request, *args, **kwargs):
    return render(request, 'base.html')


def free(request, *args, **kwargs):
    return render(request, 'base.html')