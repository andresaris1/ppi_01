from rest_framework.views import APIView
from ..serializers.review_serializer import ReviewListSerializer
from ..models.review import Review
from rest_framework.response import Response
from rest_framework import status

class ReviewsListView(APIView):

    def get(self, request):
        reviews = ReviewListSerializer(Review.objects.all(), many=True)
        return Response(reviews.data, status=status.HTTP_200_OK)


