from django.shortcuts import render

def index(request):
    return render(request, 'index.html')  # Renders home.html template

def about(request):
    return render(request, 'about.html')  # Renders about.html template

def contact(request):
    return render(request, 'contact.html')  # Renders about.html template

def services(request):
    return render(request, 'services.html')  # Renders about.html template