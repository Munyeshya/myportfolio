from django.shortcuts import render

def index(request):
    return render(request, 'index.html')  # Renders home.html template

def about(request):
    return render(request, 'about.html')  # Renders about.html template
