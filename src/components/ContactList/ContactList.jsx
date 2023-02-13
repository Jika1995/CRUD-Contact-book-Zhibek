import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({contacts, getOneContact, deleteContact}) => {
  return (
    <div>
      <center style={{ fontSize: '30px', margin: '20px' }}>Contact List</center>
      <div className='d-flex justify-content-between flex-wrap w-75 m-auto'>
        
        {contacts.map(item => (
          <ContactCard key={item.id} item={item} getOneContact={getOneContact} deleteContact={deleteContact}/>
        ))}
      </div>
    </div>
  )
}

export default ContactList