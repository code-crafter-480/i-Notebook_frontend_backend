import React, { useContext, useEffect, useRef, useState} from 'react'          //  Add 'useRef', 'useState'
import noteContext from "../context/notes/noteContext"
import NoteItem from "./NoteItem"
import AddNote from './AddNote'


const Notes = () => {
  const [note, setNote] = useState({id: "", etitle:"", edescription:"", etag:""})        //  ADD,   aigulo uporei defined korte hobe...

  const context = useContext(noteContext)
  const { notes, addNote, getNotes, editNote } = context;        // 👉 Pull 'editNote' 

  useEffect(() => {
    getNotes()
  }, [])


  //  ADD
  const updateNote = (currentNote) => {
    // ref.toogle()
    ref.current.click()         // Atar sahajje oi 'Live' demo
    // setNote(currentNote)
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  
  const ref = useRef(null)
  const refClose = useRef(null)               // 👉 Add

  // 👉 Changes
  const handleClick = (e) => {                 
    console.log("Updating the note...", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
  }

  const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value })
  }


  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">           {/*  Add 'ref'... 'd-none' --> 'display none', ai button a click korlei oi modal window ta khule jabe... */}
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/* ➡️ Add 'AddNote' form */}
              <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name='etitle'  aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>    {/* Add 'onclick' */}
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note) => {
          // return note.title;
          return <NoteItem key={note._id} note={note} updateNote={updateNote} />       //  Add 'updateNote'
        })}
      </div>
    </>
  )
}

export default Notes
