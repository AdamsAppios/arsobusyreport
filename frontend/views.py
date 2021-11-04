from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


def free(request, *args, **kwargs):
    return render(request, 'frontend/index.html')