import { useState, useEffect } from 'react';  // import useEffect
import Contact from './components/Contact';
import './App.css';

//Build behind
function Contact() {

   return (
       <div class='head'>
           <App heading = 'Contactor'/>
        </div>
    );
}


//Build front
function App(props) {
     
    const [newContact,createContact] = useState("");
    function onChange(event)
    {
        createContact(event.target.value);
    }
    function onClick()
    {
        props.setContact(contacts =>[...contacts,{ id:contacts.length+1,
                                                    description:newContact}]);
    }
    return (
    <div> 
        <h1 class='head'> {props.heading} </h1>   
        <div class='row'>
        <div class ='box'>     
            <h2 class ='head'> Contacts </h2>
                <h3 class='head'><input type = "text" placeholder='Name' onChange={onChange}></input></h3>
                <div class ='head'> 
                    <button type='button' class='green' onClick={onClick}>Create Contact</button>
                </div>
            
        </div>
        <div class ='stat'>
            <p>Click a contact to view associated phone numbers</p>
            <p>Show stats</p>
        </div>
        </div>
    </div>

    
        
    );
    


}

export default App;