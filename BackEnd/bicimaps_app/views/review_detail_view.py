from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers.review_serializer import ReviewDetailSerializer
from ..models.review import Review

class ReviewDetailView(APIView):
    def get(self, request, review_id):
        try:
            review = Review.objects.get(review_id=review_id)
            serializer = ReviewDetailSerializer(review)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as err:
            return Response({"detail": "Error al obtener review.", "error": err}, status=status.HTTP_400_BAD_REQUEST)