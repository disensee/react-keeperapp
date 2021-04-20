import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

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

    function handleClick(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        contract();
    }
    
    function expand(){
        setExpanded(true);
    }

    function contract(){
        setExpanded(false);
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>)}
        <textarea 
            name="content"
            placeholder="Take a note..."
            onFocus={expand}
            onChange={handleChange} 
            value={note.content} 
            rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
            <Fab onClick={handleClick}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;