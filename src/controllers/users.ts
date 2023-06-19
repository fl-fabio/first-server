import { Request, Response, NextFunction } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../services/users";
import { validationResult } from "express-validator";

export const getUsersHandler = (req: Request, res: Response) => {
  try {
    const users = getUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const users = getUsers();
    const user = getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(500).json({ error: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addUserHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newUser = {
      id: uuidV4(),
      ...req.body,
    };
    const addedUser = addUser(newUser);
    res.json(addedUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
  next();
};

export const updateUserHandler = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const updatedUser = updateUser(id, req.body);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: "Users not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
  next();
};

export const deleteUserHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = deleteUser(id);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
