   // function sortbyDate() {
  //   console.log("clicke sort date")
  //   //not working?
  //   const sortedByDate = ([...moods].sort((firstMood, lastMood) => lastMood.now - firstMood.now))
  //   setMoods(sortedByDate)
  // }

  // function sortbyRating() {
  //   console.log("cliked sort rating")
  //   //action happens when I do something in code
  //   // const sortedRating = moods.sort((leastRating, MostRating) =>  MostRating.rating - leastRating.rating)
  //   //setMoods(sortedRating)
  //   setMoods(prevMoods => {
  //     return prevMoods.sort((leastRating, MostRating) =>  MostRating.rating - leastRating.rating)
  //   })
  // }
 // const [isEditing, setEditing] = useState(false);
    // const [newMood, setNewMood] = useState('');
    // const [newRating, setnewRating] = useState();

    // function handleEditMood(e) {
    //     setNewMood(e.target.value);
    //   }

    // function handleEditRating(e){
    //     setnewRating(e.target.value)
    // }

    // function handleSubmitEdited(e) {
    //     e.preventDefalt();
    //     props.editTask(props.id, newMood, newRating)
    //     setNewMood("")
    //     setnewRating()
    //     setEditing(false)
    // }

    // const editingTemplate = (
    //     <form>
    //     <label htmlFor={id}>New mood for {mood}</label>
    //     <input 
    //     id={id} 
    //     type="text"
    //     value={newMood}
    //     onChange={handleEditMood}
    //     ></input>

    //     <label htmlFor="rates">Ratings</label>
    //     <input 
    //     type="text"
    //     value={newRating}
    //     onChange={handleEditRating}
    //     ></input>

    //     <button type="button" className="btn todo-cancel"
    //      onClick={() => setEditing(false)} >    
    //     Cancel  </button>
    //     <button onSubmit={handleSubmitEdited}>Submit</button>  
    // </form>
    // );

    // const viewTemplate = (
    //     <div>
    //     <p>{now}</p>
    //     <p>{mood}</p>
    //     <p>{stars}</p>
    //     <button onClick={handleRemove}>Remove</button> 
    //     <button type="button" className="btn" onClick={() => setEditing(true)}>
    //          Edit: {mood}
    //     </button>
    // </div>
    // )

    // return (
    //     <li>{isEditing ? editingTemplate : viewTemplate}</li>
    // )