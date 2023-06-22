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
import { validateQueryParams } from "../middleware/validators/users.validation";


export const router = Router();

router.get("/",validateQueryParams, getCitiesHandler);

router.get("/:id", getCitiesByIdHandler);

router.post("/", validateCityPostRequest, addCityHandler);

router.patch("/:id", validateCityPatchRequest, updateCityHandler);

router.delete("/:id", deleteCityHandler);
