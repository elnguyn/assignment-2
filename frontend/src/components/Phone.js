import React, { useState, useEffect } from 'react';

function Phone() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [phones, setPhones] = useState([]);
    const [names, setNames] = useState([]);
    
    function addPhone(event){
        setPhones(event.target.value);
    }

    function addName(event) {
        setNames(event.target.value);
    }

    


    useEffect(() => {
        fetch(`${host} + '/contacts'${contactId}/phones`) 
            .then(response => response.json())
            .then(data => setPhoneNumber(data))
            .catch(error => console.error('Error:', error));
    }, []);


    return(
        <div>
            <input type ='text' placeholder='Name' onChange={addName}></input>
            <input type ='text' placeholder='Phone number'onChange={addPhone}></input>
            <button type ='button'>Add</button>
        
        </div>
        
    )
}