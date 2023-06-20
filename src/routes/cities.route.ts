import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  getCitiesHandler,
  getCitiesByIdHandler,
  addCityHandler,
  updateCityHandler,
  deleteCityHandler,
} from "../controllers/cities.controller";

import {
  validateCityPatchRequest,
  validateCityPostRequest,
} from "../middleware/validations/cities.validation";

import { City } from "../models/city.model";

export const router = Router();

router.get("/", getCitiesHandler);

router.get("/:id", getCitiesByIdHandler);

router.post("/", validateCityPostRequest, addCityHandler);

router.patch("/:id", validateCityPatchRequest, updateCityHandler);

router.delete(":/id", deleteCityHandler);
