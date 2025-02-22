from django.db import models

# About section model
class About(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    profile_image = models.ImageField(upload_to='about/', blank=True, null=True)
    # Optional social links
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    behance = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


# Service section model
class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    # This field can store a CSS class for an icon or a URL to an icon image.
    icon = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.title


# Portfolio (Project) section model
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/')
    # Optional external link to the project
    project_url = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.title


# Education section model
class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=100)
    field_of_study = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.degree} in {self.field_of_study} from {self.institution}"


# Contact information model (for static contact details)
class ContactInfo(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.email


# Optional: Model to capture messages sent via a contact form
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"
