import Contact from "../db/contacts.js";

export async function listContacts() {
  return await Contact.findAll();
}

export async function getContactById(contactId) {
  return await Contact.findByPk(contactId);
}

export async function addContact({ name, email, phone }) {
  const id = Math.random().toString(36).slice(2, 8) + Date.now();
  return await Contact.create({ id, name, email, phone });
}

export async function updateContact(id, data) {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  await contact.update(data);
  return contact;
}

export async function updateStatusContact(id, { favorite }) {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  await contact.update({ favorite });
  return contact;
}

export async function removeContact(id) {
  const contact = await Contact.findByPk(id);
  if (!contact) return null;
  await contact.destroy();
  return contact;
}
