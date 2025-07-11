import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message)); // повертаємо, щоб не виконувати далі
    }
    next();
  };

  return func;
};

export default validateBody;
