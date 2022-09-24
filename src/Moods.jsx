import { Link } from "react-router-dom"
import Mood from "./Mood"
export default function Moods({ moods,onEdit, onRemove, sortbyDate,sortbyRating  }) {
    function handleSortbyDate(e) {
        sortbyDate()
    }

    function handleSortbyRating(){
            sortbyRating()
    }

    return (
        <div>
            <Link to='/MoodForm'>
                <button>Add Mood</button>
            </Link>
            <button onClick={handleSortbyDate}>Sort by date</button>
            <button onClick={handleSortbyRating}>Sort by rating</button>
            {moods.map(mood => {
                return <Mood
                    now={mood.now}
                    key={mood.id}
                    id={mood.id}
                    mood={mood.mood}
                    rating={mood.rating}
                    onRemove={onRemove}
                    sortbyDate={sortbyDate}
                    onEdit={onEdit}
                />
            })}
        </div>
    )
}