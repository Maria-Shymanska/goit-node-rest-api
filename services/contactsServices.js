import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import Contact from "../db/contacts.js";

export async function listContacts() {
  return await Contact.findAll();
}

export async function getContactById(contactId) {
  return await Contact.findByPk(contactId);
}

const contactsPath = resolve("db", "contacts.json");

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((c) => c.id === contactId);
  if (index === -1) return null;

  const [removed] = contacts.splice(index, 1);
  await writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removed;
}

export async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}
