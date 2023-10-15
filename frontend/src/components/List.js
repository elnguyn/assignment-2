import { useState, useEffect } from 'react'; 
function Update(props){

    console.log(props)
    
    return(
        <div> {props.title} </div>
    );
}



function List(props) {

    const [newContact, createContact] = useState("");

    function changeContact(event){
        createContact(event.target.value);
    }

    function addContact() {
        fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newContact })
        })
            .then(response => response.json())
            .then(data => {
                props.setContact(contacts => [...contacts, data]);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        createContact(""); // Clear the input field
    }
        

    return (
        <div>
            <h1> {props.heading} </h1>
            <h2> Contacts </h2>
            <div>
            <input type='text' placeholder='Name' onChange={changeContact}></input>
            <button type='button' class='green' onClick={addContact}>Create Contact</button>
            </div>
        </div>
     );
 }
 export default List;



 //<div> 
  //      <h1 class='head'> {props.heading} </h1>   
    //    <div class='row'>
      //  <div class ='box'>     
        //    <h2 class ='head'> Contacts </h2>
          //      <h3 class='head'><input type = "text" placeholder='Name' onChange={onChange}></input></h3>
            //    <div class ='head'> 
              //      <button type='button' class='green' onClick={onClick}>Create Contact</button>
                //</div>
            
        //</div>
        //<div class ='stat'>
          //  <p>Click a contact to view associated phone numbers</p>
           // <p>Show stats</p>
        //</div>
        //</div>
    //</div>
