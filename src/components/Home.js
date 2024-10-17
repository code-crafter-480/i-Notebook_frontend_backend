import React, { useContext } from 'react'
// import noteContext from "../context/notes/noteContext"
// import Notes from './Notes'
import Notes from './Notes'


const Home = (props) => {

   // ➡️ Remove in #61 for seperating this...
  // const context = useContext(noteContext)            
  // const {notes, setNotes} = context;

  return (
    <div>
      <Notes showAlert={props.showAlert} />      {/* 👉 Add 'showAlert' #71 */}

    </div>
  )
}

export default Home
