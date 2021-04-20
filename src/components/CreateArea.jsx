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


//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/