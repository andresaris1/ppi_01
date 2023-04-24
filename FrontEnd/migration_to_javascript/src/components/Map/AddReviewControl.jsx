import { useState } from "react"

function AddReviewControl( { reviewMode, setReviewMode } ){

    const toggleReviewMode = () => {
        console.log("review mode on")
        setReviewMode(!reviewMode)
      }

    return(

        <button disabled = {reviewMode ? true : false} onClick = { toggleReviewMode } >
            Agrega una reseña 
        </button>
    )
}   

export { AddReviewControl }
