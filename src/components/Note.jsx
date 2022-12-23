import React from "react";
import Draggable from "react-draggable";
import DeleteIcon from '@material-ui/icons/Delete';
import DragHandleIcon from '@material-ui/icons/DragHandle';
function Note(props){
  return (
  <Draggable handle =".dragHandle">
  <div className="note">
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <button type ="button" onClick={()=>props.Delete({id:props.id,title:props.title,content:props.content})}><DeleteIcon /></button>
  <button type = "button" className="dragHandle"><DragHandleIcon /></button>
  </div>
  </Draggable>
  )
};
export default Note;
