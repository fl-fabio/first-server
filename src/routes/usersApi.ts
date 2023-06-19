import { Router } from "express";
import {v4 as uuidV4} from 'uuid';
import { addUserHandler, deleteUserHandler, getUserByIdHandler, getUsersHandler, updateUserHandler } from "../controllers/users";
import {validatePatchRequest, validatePostRequest} from '../middleware/validation'

import { User } from "../models/User";

export const router = Router();

router.get("/", getUsersHandler);

router.get("/:id", getUserByIdHandler);

router.post("/", validatePostRequest, addUserHandler);

router.patch("/:id",validatePatchRequest, updateUserHandler);

router.delete("/:id", deleteUserHandler);
