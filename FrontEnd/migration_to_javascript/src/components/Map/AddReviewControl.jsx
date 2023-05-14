import { useState } from "react";

/* AddReviewControl component */
function AddReviewControl({ reviewMode, setReviewMode }) {
  const toggleReviewMode = () => {
    setReviewMode(!reviewMode);
  };

  /* Return button HTML on click handler */
  return (
    <button disabled={reviewMode ? true : false} onClick={toggleReviewMode}>
      Agrega una reseña
    </button>
  );
}

export { AddReviewControl };
