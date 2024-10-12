import React, { useContext } from 'react'
// import noteContext from "../context/notes/noteContext"
// import Notes from './Notes'
import Notes from './Notes'


const Home = () => {

   // ➡️ Remove in #61 for seperating this...
  // const context = useContext(noteContext)            
  // const {notes, setNotes} = context;

  return (
    <div>
      <Notes />

    </div>
  )
}

export default Home
