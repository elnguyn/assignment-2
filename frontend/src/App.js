import { useState, useEffect } from 'react';  // import useEffect
import './App.css';
import List from './components/List';


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
            <List heading='Contactor' contacts={contacts} />
        </div>
    );
}

export default App;