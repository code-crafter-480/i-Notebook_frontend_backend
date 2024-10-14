import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    //  👉 This will remove in #65 and create original fetch API...
    /*const notesInitial = [              // This is bring from 'Fetch All Notes'...
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
     ]  */

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)



    // 👉 Get all Notes
    const getNotes = async() => {
      // API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' ,
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNGY4OWE3Mzk3YWJjOTZhYTFkMjAzIn0sImlhdCI6MTcyODQxNDEwM30.FHfr1xH92ubrTm6HrnJmMYefBZTvgjEqVyxamQJ8YDw'
        },
      })
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }


            // 👉 Add
    // ➡️ Add a Note
    const addNote = async(title, description, tag) => {

      // ➡️ API Call          // 👉 Add in #65
      // const response = await fetch(url, {
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' ,
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNGY4OWE3Mzk3YWJjOTZhYTFkMjAzIn0sImlhdCI6MTcyODQxNDEwM30.FHfr1xH92ubrTm6HrnJmMYefBZTvgjEqVyxamQJ8YDw'
          },
          body: JSON.stringify({title, description, tag})
        })

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




    // ➡️ Delete a Note   // #64
      // TODO : API CALL
    const deleteNote = (id) => {
      console.log("Deleting the note with id" + id)
      const newNotes = notes.filter( ( note ) => { return note._id !== id } )
      setNotes(newNotes)
    }



    
    // 👉 Edit a Note
    const editNote = async (id, title, description, tag) => {

      // ➡️ API Call
      // const response = await fetch(url, {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',              // 📌 API te ata PUT a6e...
        headers: {
          'Content-Type': 'application/json' ,
          'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNGY4OWE3Mzk3YWJjOTZhYTFkMjAzIn0sImlhdCI6MTcyODQxNDEwM30.FHfr1xH92ubrTm6HrnJmMYefBZTvgjEqVyxamQJ8YDw'
        },
        body: JSON.stringify(data)       // 📌📌📌 'data' may present a problem in the future...
        // body: JSON.stringify({title, description, tag})       // 📌📌📌 'data' may present a problem in the future...
      })
      const json = response.json()
    

      // Logic to edit in client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index]
        if(element._id === id){
          element.title = title
          element.description = description
          element.tag = tag
        }
      }
    }
  
    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes }}>    {/* 👉 Edit here */}        
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState