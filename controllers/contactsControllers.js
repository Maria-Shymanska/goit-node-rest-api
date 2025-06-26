import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

// Повертає всі контакти, що належать користувачу
export const getAllContacts = async (req, res) => {
  throw new Error("Test crash");
  const result = await contactsService.listContacts(req.user.id);
  res.json(result);
};

// Повертає один контакт, що належить користувачу
export const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id, req.user.id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

// Видаляє контакт, що належить користувачу
export const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id, req.user.id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

// Створює контакт з прив’язкою до користувача
export const createContact = async (req, res) => {
  const result = await contactsService.addContact({
    ...req.body,
    owner: req.user.id,
  });
  res.status(201).json(result);
};

// Оновлює контакт, перевіряючи власника
export const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.updateContact(id, req.body, req.user.id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

// Оновлює поле favorite, перевіряючи власника
export const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await contactsService.updateStatusContact(
    id,
    { favorite },
    req.user.id
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
