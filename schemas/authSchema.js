import Joi from "joi";

export const authRegisterSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
