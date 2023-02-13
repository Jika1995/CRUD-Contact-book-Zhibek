import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [contacts, setContacts] = useState([]);
  const [editedContact, setEditedContact] = useState({});

  function addContact (newContact) {
    let newContacts = [...contacts];
    newContacts.push(newContact);
    setContacts(newContacts);
    console.log(newContacts);
  };

  function getOneContact (id) {
    let obj = contacts.find(item => item.id === id);
    setEditedContact(obj);
    setShowEditModal(true);
    console.log(obj);
    console.log(editedContact);
  }

  function saveChanges(contactObj) {
    let newContacts = contacts.map(item => {
      if(item.id === contactObj.id){
        return contactObj
      } return item
    })
    setContacts(newContacts);
    setShowEditModal(false)
  }

  function deleteContact (id) {
    let newContacts = contacts.filter(item => item.id !== id);
    setContacts(newContacts)
  }

  return (
    <> 
      <Header handleShow={handleShow}/>
      <AddContact addContact={addContact} show={show} handleClose={handleClose}/>
      <ContactList contacts={contacts} getOneContact={getOneContact} deleteContact={deleteContact}/>
      {showEditModal && <EditContact showEditModal={showEditModal} handleEditClose={handleEditClose} editedContact={editedContact} saveChanges={saveChanges}/>}
      <Footer />
    </>
  );
}

export default App;
