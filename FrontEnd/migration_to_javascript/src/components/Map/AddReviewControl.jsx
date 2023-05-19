import { useState } from "react"

function AddReviewControl( { reviewMode, setReviewMode } ){

    const toggleReviewMode = () => {
        setReviewMode(!reviewMode)
      }

    return(
        
        <button disabled = { reviewMode ? true : false } 
                onClick = { toggleReviewMode } >
            Agrega una reseña 
        </button>
    )
}   

export { AddReviewControl }
