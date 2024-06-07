const { check } = require("express-validator");

const validationSchema = () => {
  return [
    check([
      "name",
      "email",
      "address",
      "username",
      "phoneNumber",
      "password",
      "disabilityTypeId",
      "gender",
      "birthDate",
    ]).notEmpty(),
    check("password").isLength({ min: 6 }),
    check("email").normalizeEmail().isEmail(),
  ];
};

module.exports = validationSchema;
