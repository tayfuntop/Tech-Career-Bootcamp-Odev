import { useState} from 'react'
import info from "../../Json/info.json"
import "./styles.css"
import List from "./List"
import Form from "./Form"

function Contacts() {
    const [contacts, setContacts] = useState(
      info.map(item => item)
    );
    
    return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts = {contacts}/>
         <Form addContact = {setContacts} contacts = {contacts}/>  {/* Props islemi yapiyoruz */}
    </div>
  )
}

export default Contacts