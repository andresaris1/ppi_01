import { useState, useRef, useEffect, useId } from "react"
import { useAxios } from '../utils/useAxios';
import { AppContext } from "../../context/AppContext";


function Review( {coordinates, setReviewMode, setReviewCoords, setReviews} ){

    const textAreaRef = useRef(null)
    const api = useAxios()
    const uniqueId = useId()

    useEffect( ()=> {
        textAreaRef.current.focus()
    }, [coordinates])

    const [ review , setReview] = useState(
        {
            "review_location": {
                    "coordinates": [coordinates.map.lat, coordinates.map.lng],
                    "type": "Point"
                  },
            "review" : ""
            }
     )
       
    const handleInput = (e) => {
        if(review.review.length < 200){
            setReview({...review, review : e.target.value })
        }
    }

    const closeReview = () => {
        setReviewMode(false)
        setReviewCoords(null)
    }

    const saveReview = (e) => {
        e.preventDefault();
        if(review.review.length < 5) { return }
        setReviewMode(false)
        setReviewCoords(null)
        api.post('create-review/', JSON.stringify(review), { headers : { 'Content-Type' : 'application/json'}})
            .then( (response) => console.log(response.data))
            .catch( (error)  => console.log(error))
        setReviews( (prev) => [...prev, {...review, user_id: "Yo :)", review_id : uniqueId }])        
    }
    return(
        <div className="review_form_container" style={{top : coordinates.box.y, left : coordinates.box.x}} >
            <form onSubmit={saveReview}
                className="review_form"
            >
                <textarea name="review" 
                        onChange={handleInput} 
                        value={review.review} 
                        ref={textAreaRef} 
                >
                </textarea>
                <ul className="review_btns">
                    <li> <button onClick={closeReview} type="button" > Cancelar </button> </li>
                    <li> <button className="save_review_btn" type="submit"> Guardar </button></li>
                </ul>
            </form>
            <button onClick={closeReview} 
                    className="close_review_box">
                        X
            </button>
        </div>
    )
}

export { Review }