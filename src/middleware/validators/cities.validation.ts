import { body } from "express-validator";

export const validateCityPostRequest = [
  body("name")
    .notEmpty()
    .withMessage("City name is required")
    .isLength({ min: 4 })
    .withMessage("City name must be at least 4 characters long"),
  body("province")
    .notEmpty()
    .withMessage("Province is required")
    .isLength({ min: 5 })
    .withMessage("Province name must be at least 5 characters long"),
  body("center")
    .notEmpty()
    .withMessage("Center is required")
    .isLength({ min: 8 })
    .withMessage("Center must be at least 8 characters long"),
];

export const validateCityPatchRequest = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("City name is required")
    .isLength({ min: 4 })
    .withMessage("City name must be at least 4 characters long"),
  body("province")
    .optional()
    .notEmpty()
    .withMessage("Province is required")
    .isLength({ min: 5 })
    .withMessage("Province name must be at least 5 characters long"),
  body("center")
    .optional()
    .notEmpty()
    .withMessage("Center is required")
    .isLength({ min: 8 })
    .withMessage("Center must be at least 8 characters long"),
];
