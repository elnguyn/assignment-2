import { useState, useEffect } from 'react'; 

function Contact(props){

    console.log(props)
    return(
        <div> </div>
    );
}



function List(props) {
    const host = "http://localhost:5000/api";
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState("");

    function changeContact(event) {
        setNewContact(event.target.value);
    }

    function addContact() {
        fetch(`${host}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newContact })
        })
            .then(response => response.json())
            .then(data => {
                if (data && data.id) {
                    setContacts(prevContacts => [...prevContacts, data]);
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
            <h2>Contacts</h2>
            <div>
                <div>
                    <input type='text' placeholder='Name' value={newContact} onChange={changeContact}></input>
                    <button type='button' className='green' onClick={addContact}>Create Contact</button>
                </div>
                {contacts.map(contact => (
                    <Contact
                        setContacts={setContacts} // Changed the prop name to match state variable
                        id={contact.id}
                        key={contact.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default List;