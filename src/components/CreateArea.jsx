import React,{useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [visibility,setVisibility] =useState("none");
  //Update the note as it's being typed.Note only gets added upon add click.
  function handleInput(event) {
    const { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  //Trigger add button click when Enter is pressed in the input.
  function handleKeyPress(event){
    if(event.keyCode===13){
      document.getElementById("add").click();
    }
  }
  return (
    <div>
      <form onSubmit={e=>e.preventDefault()}className="create-note">
        <input
          name="title"
          onChange={handleInput}
          onClick={()=>setVisibility("inline-block")}
          value={note.title}
          placeholder="Title"
          onKeyDown={handleKeyPress}
        />
        <textarea
        style={{display:visibility}}
          name="content"
          onChange={handleInput}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {/*Only zoom button in when textArea is visible*/}
        <Zoom in={visibility===("inline-block")&&true}>
        <Fab id="add" type="button" onClick={()=>{props.addNote(note);setNote({title:"",content:""});setVisibility("none");}}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
