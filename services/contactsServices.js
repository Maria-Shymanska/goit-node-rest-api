import Contact from "../db/contacts.js";

// Отримати всі контакти поточного користувача
export async function listContacts(owner) {
  return await Contact.findAll({ where: { owner } });
}

// Отримати один контакт за id і owner
export async function getContactById(owner, id) {
  return await Contact.findOne({ where: { id, owner } });
}

// Додати новий контакт
export async function addContact(
  owner,
  { name, email, phone, favorite = false }
) {
  return await Contact.create({ name, email, phone, favorite, owner });
}

// Оновити контакт
export async function updateContact(owner, id, data) {
  const contact = await Contact.findOne({ where: { id, owner } });
  if (!contact) return null;
  await contact.update(data);
  return contact;
}

// Оновити статус "favorite"
export async function updateStatusContact(owner, id, { favorite }) {
  const contact = await Contact.findOne({ where: { id, owner } });
  if (!contact) return null;
  await contact.update({ favorite });
  return contact;
}

// Видалити контакт
export async function removeContact(owner, id) {
  const contact = await Contact.findOne({ where: { id, owner } });
  if (!contact) return null;
  await contact.destroy();
  return contact;
}

export default {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  updateStatusContact,
  removeContact,
};
