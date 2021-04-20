import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';

function App(){ 
    const [notesArr, setNotesArr] = useState([]);
    
    function addNote(note){
        setNotesArr((prevItems)=>{
            return [...prevItems, note];
        })
    }

    function deleteNote(id){
        setNotesArr((prevItems)=>{
            return prevItems.filter((note, index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notesArr.map((note, index)=>{
                return(
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote} 
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;