from django.urls import path
from .views import register, login,chat

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('chat/', chat),
]