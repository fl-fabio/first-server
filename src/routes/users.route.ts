import { Router, Request, Response, NextFunction } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  addUserHandler,
  deleteUserHandler,
  getUserByIdHandler,
  getUsersByCityHandler,
  getUsersHandler,
  updateUserHandler,
} from "../controllers/users.controller";
import {
  validatePatchRequest,
  validatePostRequest,
} from "../middleware/validators/users.validation";

export const router = Router();

router.get("/", getUsersHandler);

router.get("/:id", getUserByIdHandler);

router.post("/", validatePostRequest, addUserHandler);

router.patch("/:id", validatePatchRequest, updateUserHandler);

router.delete("/:id", deleteUserHandler);
