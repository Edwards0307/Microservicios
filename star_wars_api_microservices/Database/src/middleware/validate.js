const validate = (req, res, next) => {
  const { model } = req.params;

  if (model === "Characters" || model === "Films" || model === "Planets") {
    return next();
  } else throw new Error("Esta ruta no existe");
};

export default validate;
