import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import auth from "../helpers/auth.js";
import {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.use(auth);

contactsRouter.get("/", ctrlWrapper(contactsControllers.getAllContacts));
contactsRouter.get("/:id", ctrlWrapper(contactsControllers.getOneContact));
contactsRouter.delete("/:id", ctrlWrapper(contactsControllers.deleteContact));

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  ctrlWrapper(contactsControllers.createContact)
);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrlWrapper(contactsControllers.updateContact)
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  ctrlWrapper(contactsControllers.updateStatusContact)
);

export default contactsRouter;
