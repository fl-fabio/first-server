import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  addUserHandler,
  deleteUserHandler,
  getUserByIdHandler,
  getUsersHandler,
  updateUserHandler,
} from "../controllers/users.controller";
import {
  validatePatchRequest,
  validatePostRequest,
} from "../middleware/validations/users.validation";

import { User } from "../models/user.model";

export const router = Router();

router.get("/", getUsersHandler);

router.get("/:id", getUserByIdHandler);

router.post("/", validatePostRequest, addUserHandler);

router.patch("/:id", validatePatchRequest, updateUserHandler);

router.delete("/:id", deleteUserHandler);
