import React, { useState, useEffect } from 'react';

function Contact(props) {
    return (
        <div>{props.name}</div>
    );
}

function List(props) {
    const host = `http://localhost:5000/api`
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState("");

    function changeContact(event) {
        setNewContact(event.target.value);
    }

    function addContact() {
        fetch(`${host}/contacts`, { // Replaced `${host}` with `host`
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newContact })
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.id) {
                    setContacts(contacts => [...contacts, { id: data.id, name: data.name }]); // Include name
                } else {
                    console.error('Error creating contact:', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setNewContact("");
    }

    useEffect(() => {
        fetch(`${host}/contacts`) 
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>{props.heading}</h1>
            <div class='box'> 
                <h2>Contacts</h2>
                <div>
                    <div>
                        <h3><input type='text' placeholder='Name' value={newContact} onChange={changeContact}></input></h3>
                        <button type='button' className='green' onClick={addContact}>Create Contact</button>
                    </div>
                    {contacts.map(contact => (
                    <Contact
                        name={contact.name} 
                        key={contact.id}
                    />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default List;
