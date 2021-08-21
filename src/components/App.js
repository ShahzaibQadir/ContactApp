import './App.css';
import React,{useState} from 'react';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';
import EditContact from './EditContact';
import Header from './Header';

function App() {

  const [contacts,setContacts] = useState([]);
  
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,contact]);
  }

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/> 
      {/* <ContactDetail/> */}
      {/* <EditContact/> */}
    </div>
  );
}

export default App;
