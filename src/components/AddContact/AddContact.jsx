import {React, useState} from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';

const AddContact = ({addContact, show, handleClose}) => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');

  function createContact () {
    if(!name || !lastName || !number) {
      alert('Some inputs are empty!');
      return
    };

    let contactObj = {
      name,
      lastName,
      number, 
      id: Date.now()
    };

    addContact(contactObj);

    setName('');
    setLastName('');
    setNumber('');

    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">

            <FormControl size="lg" className="my-3" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

            <FormControl size="lg" className="my-3" placeholder="LastName" value={lastName} onChange={e => setLastName(e.target.value)} />

            <FormControl size="lg" className="my-3" placeholder="Number" value={number} onChange={e => setNumber(e.target.value)} />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createContact}>
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddContact