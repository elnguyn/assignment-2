
import React, { useState, useEffect } from 'react';
function Contact(props) {

    const host = "http://localhost:5000/api";
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState("");

    function cDelete() {
        fetch(host + '/contacts', {
            method: 'DELETE',
        })
        .then(() => {
            props.setContacts(contacts => contacts.filter(contact => contact.id != props.id));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
 
    return (
        <div>{props.name}<button tupe ='button' onClick={cDelete}>Delete</button></div>
    );
}

export default Contact;