import { useState, useEffect } from 'react';  // import useEffect
import './App.css';

function App() {

    return (
    <div class='wrap'> 
        <h1 class='head'>   Contactor </h1>   
        <div class='row'>
        <div class ='box'>     
            <h2 class ='head'> Contacts </h2>
                <h3 class='head'><input type = "text" placeholder='Name'></input></h3>
                <div class ='head'> 
                <button type='button' class='green'>Create Contact</button>
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