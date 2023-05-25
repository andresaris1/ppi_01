import { useState } from "react";

// Function to add a review
function AddReviewControl({ reviewMode, setReviewMode }) {
  // Function to toggle review mode
  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
  };

  return (
    <button disabled={reviewMode ? true : false} onClick={toggleReviewMode}>
      Agrega una reseña
    </button>
  );
}

export { AddReviewControl };
