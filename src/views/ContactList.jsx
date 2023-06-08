import React, { useState, useEffect } from 'react'
import ListItemPreview from '../components/ListItemPreview'
import { contactService } from '../services/contact.service'
import AddContactModal from '../components/addContactModal'

const ContactList = () => {
  const [contactsList, setContactsList] = useState([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)


  useEffect(() => {
    const fetchContacts = async () => {
      const { contacts } = await contactService.query('contacts')
      console.log(contacts);
      setContactsList(contacts)
    }
    fetchContacts()
  }, [])

  const addContact = () => {
    console.log('addContact')
    setIsAddModalOpen(!isAddModalOpen)
  }
  

  return (
    <section className='call-history call-list flex column'>
      <button className='add-btn' onClick={addContact}> Add new contact </button>
      {isAddModalOpen ? <AddContactModal/> : ''}
      {contactsList.length ? contactsList.map((callDetails) =>
        <ListItemPreview key={callDetails.id} callDetails={callDetails} />) : ''}
    </section>

  )
}

export default ContactList