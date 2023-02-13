import React from 'react';
import { useState } from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';

const EditContact = ({showEditModal, handleEditClose, editedContact, saveChanges}) => {

  const [contact, setContact] = useState(editedContact);
  console.log(contact);

  const handleInput = e => {
     let newContact = {
      ...contact,
      [e.target.name]: e.target.value
    }
    setContact(newContact);
  };

  function saveEditedContact () {
    for (let key in contact) {
      if (contact[key] === ''){
        alert('Some inputs are empty!');
        return
      }
    };

    saveChanges(contact)
  }

  return (
    <Modal show={showEditModal} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form">

          <FormControl size="lg" className="my-3" placeholder="Name" value={contact.name} name="name" onChange={handleInput} />

          <FormControl size="lg" className="my-3" placeholder="LastName" value={contact.lastName} name="lastName" onChange={handleInput} />

          <FormControl size="lg" className="my-3" placeholder="Number" value={contact.number} name="number" onChange={handleInput} />

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveEditedContact}>
          Save Changes 
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditContact