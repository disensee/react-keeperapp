import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {value, name}=event.target;

        setNote((prevValues)=>{
            if(name==="title"){
                return {
                    title: value,
                    content: prevValues.content
                }
            }else if(name==="content"){
                return {
                    title: prevValues.title,
                    content: value
                }
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
            });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;