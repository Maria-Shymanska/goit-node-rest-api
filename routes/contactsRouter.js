import express from "express";
import {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} from "../controllers/contactsControllers.js";

import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

import validateBody from "../helpers/validateBody.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:id", getOneContact);

router.post("/", validateBody(createContactSchema), createContact);

router.put("/:id", validateBody(updateContactSchema), updateContact);

router.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

router.delete("/:id", deleteContact);

export default router;
