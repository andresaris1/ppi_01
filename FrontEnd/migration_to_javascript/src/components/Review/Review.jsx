import { useState, useRef, useEffect, useId } from "react";
import { useAxios } from "../utils/useAxios";

function Review({
  coordinates,
  setReviewMode,
  setReviewCoords,
  setReviews,
  setReviewCreated,
}) {
  const textAreaRef = useRef(null);
  const api = useAxios();
  const uniqueId = useId();
  const [review, setReview] = useState({
    review_location: {
      coordinates: [coordinates.map.lat, coordinates.map.lng],
      type: "Point",
    },
    review: "",
  });
  const [loadingFetch, setLoadingFetch] = useState(false);

  useEffect(() => {
    textAreaRef.current.focus();
  }, [coordinates]);

  // Event handler for input changes
  const handleInput = (e) => {
    if (review.review.length < 200) {
      setReview({ ...review, review: e.target.value });
    }
  };

  // Close the review form
  const closeReview = () => {
    setReviewMode(false);
    setReviewCoords(null);
  };

  // Save the review
  const saveReview = (e) => {
    e.preventDefault();
    if (review.review.length < 5) {
      return;
    }
    setLoadingFetch(true);
    api
      .post("create-review/", JSON.stringify(review), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 201) {
          setReviewCreated({
            show: true,
            content: "Review created successfully",
            type: "success",
          });
        }
        setReviews((prev) => [
          ...prev,
          { ...review, user_id: "Me :)", review_id: uniqueId },
        ]);
        setReviewMode(false);
        setReviewCoords(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingFetch(false));
  };

  return (
    <>
      <div
        className="review_form_container"
        style={{ top: coordinates.box.y, left: coordinates.box.x }}
      >
        {loadingFetch ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <form onSubmit={saveReview} className="review_form">
              <textarea
                name="review"
                onChange={handleInput}
                value={review.review}
                ref={textAreaRef}
                placeholder="Max 200 characters."
              ></textarea>

              <ul className="review_btns">
                <li>
                  <button onClick={closeReview} type="button">
                    Cancel
                  </button>
                </li>
                <li>
                  <button className="save_review_btn" type="submit">
                    Save
                  </button>
                </li>
              </ul>
            </form>

            <button onClick={closeReview} className="close_box">
              X
            </button>
          </>
        )}
      </div>
    </>
  );
}

export { Review };
