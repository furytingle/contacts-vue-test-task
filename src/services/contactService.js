import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.VUE_APP_API_URL;

class ContactService {
    getContacts() {
        return axios.get(API_URL + 'contacts', {headers: authHeader()});
    }

    showContact(id) {
        return axios.get(API_URL + 'contacts/' + id, {headers: authHeader()});
    }

    createContact(contact) {
        return axios.post(API_URL + 'contacts', {
            name: contact.name,
            email: contact.email
        }, {headers: authHeader()});
    }

    updateContact(contact) {
        return axios.put(API_URL + 'contacts/' + contact.id, {
            name: contact.name,
            email: contact.email
        }, {headers: authHeader()})
    }
}

export default new ContactService();