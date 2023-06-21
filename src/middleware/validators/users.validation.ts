import { body, query } from "express-validator";
import { getCities, getCityById } from "../../services/cities.service";
import { City } from "../../models/city.model";

export const validatePostRequest = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 4 })
    .withMessage("Name must be at least 6 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 6 characters long"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\d{10}$/)
    .withMessage("Invalid phone number format"),
  body("city")
    .notEmpty()
    .withMessage("city is required")
    .custom((value) => {
      const foundedCity = getCities().find((city: City) => city.id === value);
      if (!foundedCity) {
        throw new Error("City not found");
      }
      return true;
    }),
];

export const validatePatchRequest = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 4 })
    .withMessage("Name must be at least 6 characters long"),
  body("email")
    .optional()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  body("username")
    .optional()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 6 characters long"),
  body("password")
    .optional()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("phone")
    .optional()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^\+\d{2}-\d{10}$/)
    .withMessage("Invalid phone number format"),
  body("city")
    .optional()
    .notEmpty()
    .withMessage("city is required")
    .custom((value) => {
      const foundedCity = getCityById(value);
      if (!foundedCity) {
        throw new Error("City not found");
      }
      return true;
    }),
];


