const ctrlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next); // важливо передавати next
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
