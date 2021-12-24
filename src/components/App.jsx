import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
function App(){
  const url ="http://localhost:3001";
  //create a notes array that keeps contains all notes. The array should be a hook because we want to dynamically render the notes on screen.
  const [notes,setNotes] =useState([]);
  useEffect(()=>{
    axios.get(url+"/notes")
    .then(res=>{
      setNotes(res.data);
    })
  },[]);
//add a new note to the array with the use of the spread operator and previous array from the set function.
  function addNote(note){
    setNotes((prevValue)=>
       [...prevValue,note] //This means new array = previousArray.push(note)
    );
    axios.post(url+"/notes",note)
      .catch((err)=> console.log(err));
    console.log(notes);
  }
  function deleteNote(note){
    setNotes((prevValue)=>
    prevValue.filter((item,i)=> i!==note.id) //return a new array whith all items except for the one that had the given index.
  );
  console.log(note);
    axios.delete(url+"/note",{data:{title:note.title,content:note.content}})
      .catch((err) => console.log(err));
  }

  return <div>
  <Header />
  <CreateArea addNote={addNote}/>
  {notes.map((note,index)=>
    <Note
    key={index}
    id={index}
    title={note.title}
    content={note.content}
    Delete={deleteNote}
    />
  )}
   <Footer />
   </div>
  ;
};
export default App;
