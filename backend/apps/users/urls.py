from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, LogoutView, CustomTokenObtainPairView, get_csrf_token, DashboardView, CookieTokenRefreshView
from django.urls import path

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('csrf/', get_csrf_token, name='csrf'),
    path('refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
]
