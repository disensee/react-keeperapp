import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        //destructure event target to set name and value to constant
        const {value, name}=event.target;

        //set notes values while keeping title/content
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value
            }
        });
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            onChange={handleChange} 
            value={note.content} 
            rows="3" 
        />
        <button onClick={(event)=>{
            event.preventDefault();
            props.handleAdd(note);
            setNote({
                title: "",
                content: ""
            });}}>
                Add
            </button>
      </form>
    </div>
  );
}

export default CreateArea;