from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    gender_choices = {
        'Male': 'Male',
        'Female': 'Female',
    }
    roles_choices = {
        'Admin': 'Admin',
        'Team': 'Team',
        'School': 'School',
    }
    
    gender = models.CharField(choices=gender_choices, null=True)
    role = models.CharField(choices=roles_choices, null=True)
    email = models.EmailField(unique=True)
    pass