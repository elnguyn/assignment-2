import React, { useState, useEffect } from 'react';
import List from './components/List';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/contacts') // Update the URL
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className='head'>
            <List heading='Contactor' contacts={contacts} setContacts={setContacts}/>
        </div>
    );
}

export default App;
