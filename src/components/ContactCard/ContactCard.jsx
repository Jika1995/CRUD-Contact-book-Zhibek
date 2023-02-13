import React from 'react';
import {Card, Button} from 'react-bootstrap'

const ContactCard = ({item, getOneContact, deleteContact}) => {
  // console.log(item.id);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.lastName}</Card.Text>
        <Card.Text>
          {item.number}
        </Card.Text>
        <Button variant="primary" className='mx-2' onClick={() => getOneContact(item.id)}>Edit</Button>
        <Button variant="danger" onClick={()=>deleteContact(item.id)}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default ContactCard