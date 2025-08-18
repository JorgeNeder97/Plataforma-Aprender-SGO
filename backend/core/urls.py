from django.conf.urls.static import static
from django.urls import path, include
from django.conf import settings
from django.contrib import admin

urlpatterns = [
    # Cuando es una clase se utiliza .as_view() porque path requiere metodos
    path('admin/', admin.site.urls),
    path('api/users/', include('apps.users.urls')),
] 

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)