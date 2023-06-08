import React from 'react'
import { contactService } from '../services/contact.service'

const addContactModal = () => {

    const saveContact = () => {
        // here i finished the time
        contactService.add()
    }

    return (
        <section className='add-contact-modal'>
            <h2> Add new Contact </h2>
            <input type="text" placeholder='contact name' />
            <input type="text" placeholder='contact number' />
            <button onClick={saveContact}> Save </button>
            <button className='x-btn'> X </button>
        </section>
    )
}

export default addContactModal