from django.urls import path, include
from ..views.user_creation_view import UserCreationView
from ..views.user_detail_view import UserDetailView
from ..views.review_creation_view import ReviewCreationView
from ..views.reviews_list_view import ReviewsListView
from ..views.review_detail_view import ReviewDetailView
from ..views.route_creation_view import RouteCreationView
from ..views.routes_list_of_user_view import RoutesListView
from ..views.bike_way_creation_view import BikeWaysCreationView


urlpatterns = [
    path('sign-up/', UserCreationView.as_view()),
    path('user-detail/', UserDetailView.as_view()),
    path('create-review/', ReviewCreationView.as_view()),
    path('reviews/', ReviewsListView.as_view()),
    path('review-detail/<int:review_id>/', ReviewDetailView.as_view()),
    path('create-route/', RouteCreationView.as_view()),
    path('my-routes/', RoutesListView.as_view()),
    path('create-bike-way/', BikeWaysCreationView.as_view()),
]