from django.urls import path
from base.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", index, name="index"),
    path("about/",about, name="about"),
    path("contact/",contact, name="contact"),
    path("services/",services, name="services"),
    path("portfolio/",portfolio, name="portfolio"),
    path("portfolio/slug/",portfolio_slug, name="portfolio-details"),
    path("education/",education, name="education"),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
