import { Link } from "react-router-dom"
import {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function MoodForm(props) {
  
  const now = new Date().toString()
    const moodTextRef = useRef()
    const moodRatingRef = useRef()

    function submitForm(e) {
        const mood = moodTextRef.current.value
        const rating = +moodRatingRef.current.value
        if (mood === "" || mood===" " || mood === "" && mood==="" ) return
        if(!Number(rating)) {
          console.error("enter a number")
          return
        }
        props.setMoods(prevMoods => {
          return [...prevMoods, { id:uuidv4(), now:now, mood: mood, rating: rating }]
        })
      }
    
   
return (
    <form>
        <label htmlFor="notes">Notes</label>
        <input ref={moodTextRef}  name="notes" type="text"></input>
        <label htmlFor="rates">Ratings</label>
        <input ref={moodRatingRef} name="rates" type="text"></input>
        <Link to="/">
        <button onClick={submitForm}>Submit</button>
        </Link>
    </form>
)
}