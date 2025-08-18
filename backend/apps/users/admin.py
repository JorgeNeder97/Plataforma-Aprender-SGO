from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ("username", "email", "role", "is_active", "last_login", "id", "gender")
    search_fields = ("username", "email", "role", "last_login")
    ordering = ("id",)
    readonly_fields = ("id", "last_login")
    
     # Campos visibles en el formulario de edición
    fieldsets = (
        (None, {"fields": ("username", "password", "is_active", "role", "gender")}),
        ("Personal Info", {"fields": ("first_name", "last_name", "email")}),
    )

    # Campos visibles al crear un nuevo usuario
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("username", "email", "password1", "password2", "role", "gender", "is_active", "is_staff"),
        }),
    )