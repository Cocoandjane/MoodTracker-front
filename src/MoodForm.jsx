import { Link } from "react-router-dom"
import { useRef } from 'react'


export default function MoodForm({ onSubmit }) {
  const moodTextRef = useRef()
  const moodRatingRef = useRef()

  function submitForm(e) {
    onSubmit(moodTextRef.current.value, moodRatingRef.current.value)
  }

  return (
    <form>
      <label htmlFor="notes">Notes</label>
      <input ref={moodTextRef} name="notes" type="text"></input>
      <label htmlFor="rates">Ratings</label>
      <input ref={moodRatingRef} name="rates" type="text"></input>
      <Link to="/">
        <button onClick={submitForm}>Submit</button>
      </Link>
    </form>
  )
}