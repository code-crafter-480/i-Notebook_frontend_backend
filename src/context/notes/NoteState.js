import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [              // This is bring from 'Fetch All Notes'...
        {
          "_id": "67058f9ac50bd0576ca7792b",
          "user": "6704f89a7397abc96aa1d203",
          "title": "My first title",
          "description": "This is first description",
          "tag": "personal",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
        {
          "_id": "14758f9ac5udt05760u9794f",
          "user": "9364f89a7935ahd56aa1d028",
          "title": "My second title",
          "description": "This is second description",
          "tag": "public",
          "date": "2024-10-08T20:01:30.902Z",
          "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState