import React from 'react'

const NoteItem = (props) => {
    const {note} = props;
    return (
        <div className='col-md-3'>
            {/* {note.title}
            {note.description} */}
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2"></i>         {/* ➡️ fontawesome icon */}
                    <i className="fa-solid fa-pen-to-square mx-2"></i>        {/* ➡️ fontawesome icon */}
                </div> 
            </div>
      </div>
  )
}

export default NoteItem
