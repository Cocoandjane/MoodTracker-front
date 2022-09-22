import { Link } from "react-router-dom"
import { useState } from 'react'
export default function Mood({ id, mood, now, rating, onRemove, editMood }) {

    let stars = ""
    for (let i = 0; i < 10; i++) {
        if (i < rating) {
            stars += "⭐"
        } else {
            stars += "☆"
        }

    }

    function handleRemove() {
        onRemove(id)
    }

    function handleSubmitEdited(e) {
        editMood(id, newMood ? newMood: mood, newRating ? newRating: rating)
        setNewMood("")
        setnewRating()
        setEditing(false)
    }
    const [isEditing, setEditing] = useState(false);
    const [newMood, setNewMood] = useState('');
    const [newRating, setnewRating] = useState();

    const editingTemplate = (
        <form>
            <label htmlFor="notes">Notes</label>
            <input defaultValue={mood} name="notes" type="text"
                onChange={(e) => setNewMood(e.target.value)}
            ></input>
            <label htmlFor="rates">Ratings</label>
            <input defaultValue={rating} name="rates" type="text"
                onChange={(e) => setnewRating(e.target.value )}
            ></input>
            <Link to="/">
                <button onClick={handleSubmitEdited}>Submit</button>
            </Link>
        </form>
    )

    const viewTemplate = (
        <div>
            <p>{now}</p>
            <p>{mood}</p>
            <p>{stars}</p>
            <button onClick={handleRemove}>Remove</button>
            <button type="button" className="btn" onClick={() => setEditing(true)}>
                Edit: {mood}
            </button>
        </div>
    )

    return (
        <div>{isEditing ? editingTemplate : viewTemplate}</div>
    )
}
