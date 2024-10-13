import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [              // This is bring from 'Fetch All Notes'...
        {
          "_id": "67058f9ac50bd0g576ca7792b",
          "user": "6704f89a7397abc96aa1d203",
          "title": "My first title",
          "description": "This is first description",
          "tag": "personal",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758df9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "147d58f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760du9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt0d5760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "1475d8f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)

            // 👉 Add
    // ➡️ Add a Note
    const addNote = (title, description, tag) => {
      // TODO : API CALL
      console.log("Adding a new note")
      const note = {
        "_id": "1475d8f9ac5udt05760u9794f",
        "user": "9364f89a7935ahd56aa1d028",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-10-08T20:01:30.902Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }

    // ➡️ Delete a Note   // 👉 #64
      // TODO : API CALL
    const deleteNote = (id) => {
      console.log("Deleting the note with id" + id)
      const newNotes = notes.filter( ( note ) => { return note._id !== id } )
      setNotes(newNotes)
    }

    // ➡️ Edit a Note
    const editNote = () => {

    }
    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>    {/* 👉 Edit here */}        
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState