from django.urls import path, include
from ..views.user_creation_view import UserCreationView
from ..views.user_detail_view import UserDetailView

urlpatterns = [
    path('sign-up/', UserCreationView.as_view()),
    path('user-detail/', UserDetailView.as_view()),
]