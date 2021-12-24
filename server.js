const express =require("express");
const mongoose =require("mongoose");
const port=3001;
const app= express();
const cors =require("cors");
app.use(express.urlencoded({
  extended:true
}));
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/NotesDB");
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  id:String
});
const Note = mongoose.model("Note",noteSchema);
app.route("/notes")
.get((req,res)=>{
  Note.find({},(err,notes)=>{
    if(err) res.send(err);
    else{
      res.json(notes);
    }
  })
})
.post((req,res)=>{
  const note = new Note({
    title: req.body.title,
    content:req.body.content
  });
  note.save();
  console.log("note saved");
});
app.route("/note")
.delete((req,res)=>{
  Note.deleteOne({title:req.body.title,content:req.body.content},(err,result)=>{
    if(err) console.log(err);
    else res.send("Successfully deleted note")
  })
});
app.listen(port,function(req,res){
  console.log("Server has started on port 3001");
})
