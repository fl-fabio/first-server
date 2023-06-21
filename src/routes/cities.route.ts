import { Router } from "express";
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
} from "../middleware/validators/cities.validation";


export const router = Router();

router.get("/", getCitiesHandler);

router.get("/:id", getCitiesByIdHandler);

router.post("/", validateCityPostRequest, addCityHandler);

router.patch("/:id", validateCityPatchRequest, updateCityHandler);

router.delete("/:id", deleteCityHandler);
