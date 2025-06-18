import express from "express";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

import validateBody from "../helpers/validateBody.js";

import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateStatusContact,
} from "../controllers/contactsControllers.js";

const router = express.Router();

// Всі контакти
router.get("/", getAllContacts);

// Конкретний контакт за ID
router.get("/:id", getOneContact);

// Створити новий контакт - тут валідація тіла за createContactSchema
router.post("/", validateBody(createContactSchema), createContact);

// Оновити контакт - тут валідація тіла за updateContactSchema
router.put("/:id", validateBody(updateContactSchema), updateStatusContact);

router.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

router.delete("/:id", deleteContact);

export default router;
