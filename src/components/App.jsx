import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';
import notes from '../notes';

function App(){ 
    const [notesArr, setNotesArr] = useState([]);
    
    function addNote(note){
        setNotesArr((prevItems)=>{
            const returnArr = [...prevItems, note];
            console.log(returnArr);
            return returnArr;
        })
    }

    return (
        <div>
            <Header />
            <CreateArea handleAdd={addNote}/>
            {notesArr.map((note, index)=>{
                return(
                    <Note
                        key={index+1}
                        title={note.title}
                        content={note.content} 
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;