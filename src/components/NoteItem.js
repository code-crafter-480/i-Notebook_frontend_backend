import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const NoteItem = (props) => {
    const {note, updateNote} = props;         //  Access 'updateNote'

    const context = useContext(noteContext)      // Add          
    const {deleteNote} = context;               //  Add

    return (
        <div className='col-md-3'>
            {/* {note.title}
            {note.description} */}
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2"  onClick={()=>{deleteNote(note._id)}}  ></i>         {/* ➡️ fontawesome icon */}
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=> {updateNote(note)}}></i>        {/* 👉 Add 'onclick' */}    {/* ➡️ fontawesome icon */}
                </div> 
            </div>
      </div>
  )
}

export default NoteItem
