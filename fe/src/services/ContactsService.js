import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }
  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/41526d52-b394-4402-a277-492803573aac?orderBy=${orderBy}`)
  }
  async createContact(contact) {
    return this.httpClient.post('/contacts', contact)
  }
}

export default new ContactsService()
