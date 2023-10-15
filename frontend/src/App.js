import { useState, useEffect } from 'react';  // import useEffect
import List from './components/List';
import './App.css';



//Build front
function App() {

    const [contact1, setContact] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost/api/contacts')
        .then(response => response.json())
        .then(data => setContact(data))
        .catch((error) => {
        console.error('Error:', error);
        });
        }, []);

    return(
        <div class='head'>
            <List heading = 'Contactor' contact1={contact1} setContact={setContact} />
        </div>
    );
  
  
}

export default App;