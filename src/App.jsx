import { useState } from 'react'
import './App.css'
import Moods from './Moods'
import MoodForm from './MoodForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [moods, setMoods] = useState([])

const sortbyDate = () => {
  console.log("clicked sort date")
  const sortedByDate = ([...moods].sort((firstMood, lastMood) => 
  new Date(lastMood.now) - new Date(firstMood.now)))
  setMoods(sortedByDate)
}

const sortbyRating =() => {
  const sortedRating = ([...moods].sort((leastRating, MostRating) =>  MostRating.rating - leastRating.rating))
    setMoods(sortedRating)
}


  function onRemove(id) {
    const newMoods = moods.filter((mood) => {
      // console.log('this ', mood.id, 'that ', id); 
      return mood.id != id
    })
    setMoods(newMoods)
  }

  function editMood(id, newMood, newRating){
    const editedMood = moods.map((mood) => {
      if(mood.id ===id) {
        return{...mood, mood:newMood, rating:newRating}
      }
      return mood
    })
    setMoods(editedMood)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Moods editMood={editMood} sortbyRating={sortbyRating} sortbyDate={sortbyDate}  onRemove={onRemove} moods={moods} />}></Route>
          <Route path='/MoodForm' element={<MoodForm setMoods={setMoods} />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
