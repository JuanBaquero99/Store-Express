function validatorHandler(schema, property) { // The function that validates the data
  return (req, res, next) => {
    const data = req[property]; // The data comes from a request
    const { error } = schema.validate(data); // Validate the data
    const valid = error == null; // If there are no errors, it is valid
    if (valid) {
      next(); // If it is valid, continue with the next function
    } else {
      const { details } = error; // If not, display the errors
      const message = details.map((i) => i.message).join(",");
      console.log("error", message);
      res.status(422).json({ error: message });
    }
  };
}

module.exports = validatorHandler;
