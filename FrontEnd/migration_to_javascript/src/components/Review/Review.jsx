import { useState, useRef, useEffect, useId } from "react";
import { useAxios } from "../utils/useAxios";

// Define the Review component.
function Review({
  coordinates,
  setReviewMode,
  setReviewCoords,
  setReviews,
  setReviewCreated,
}) {
  // Initialize state variables ande refs.
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

  // Set focus on the textarea when the component mounts.
  useEffect(() => {
    textAreaRef.current.focus();
  }, [coordinates]);

  // Event handlers.
  const handleInput = (e) => {
    if (review.review.length < 200) {
      setReview({ ...review, review: e.target.value });
    }
  };

  const closeReview = () => {
    setReviewMode(false);
    setReviewCoords(null);
  };

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
        response.status === 201 &&
          setReviewCreated({
            show: true,
            content: "Reseña creada exitosamente",
            type: "success",
          });
        setReviews((prev) => [
          ...prev,
          { ...review, user_id: "Yo :)", review_id: uniqueId },
        ]);
        setReviewMode(false);
        setReviewCoords(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingFetch(false));
  };

  // Return the code to display the Review component.
  return (
    <>
      <div
        className="review_form_container"
        style={{ top: coordinates.box.y, left: coordinates.box.x }}
      >
        {" "}
        {loadingFetch ? (
          <h1>Cargando...</h1>
        ) : (
          <>
            <form onSubmit={saveReview} className="review_form">
              <textarea
                name="review"
                onChange={handleInput}
                value={review.review}
                ref={textAreaRef}
                placeholder="Máx. 200 carácteres."
              ></textarea>

              <ul className="review_btns">
                <li>
                  {" "}
                  <button onClick={closeReview} type="button">
                    {" "}
                    Cancelar
                  </button>
                </li>
                <li>
                  <button className="save_review_btn" type="submit">
                    {" "}
                    Guardar
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
