
import { httpService } from './http.service.js'

const STORAGE_KEY = 'contact'

export const contactService = {
    query,
    getById,
    remove,
    add
}
window.cs = contactService


async function query(contactsType) {
    return httpService.get(STORAGE_KEY, {contactsType})
}

function getById(contactId) {
    return httpService.get(`${STORAGE_KEY}/${contactId}`)
}

async function remove(contactId) {
    return httpService.delete(`${STORAGE_KEY}/${contactId}`)
}

async function add(contactId) {
    return httpService.put(`${STORAGE_KEY}/${contactId}`)
}
