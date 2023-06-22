import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getUsersByCity,
  getUsers,
} from "../services/users.service";
import { ValidateRequest } from "../middleware/bodyParser";
import { userShowed, usersShowed } from "../utils/users.functions";

export const getUsersHandler = [
  ValidateRequest,
  (req: Request, res: Response) => {
    try {
      const usersQueryParams = req.query;

      const { results, total } = getUsers(
        usersQueryParams as { [key: string]: string }
      );

      const users = usersShowed(results);
      res.json({ total, users });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
];

export const getUserByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = getUserById(id);
    if (user) {
      res.json(userShowed(user));
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsersByCityHandler = (req: Request, res: Response) => {
  const { city } = req.query;
  try {
    if (city) {
      const filteredUsers = getUsersByCity(city as string);
      res.json(usersShowed(filteredUsers));
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addUserHandler = [
  ValidateRequest,
  (req: Request, res: Response) => {
    try {
      const newUser = {
        id: uuidV4(),
        ...req.body,
      };
      const addedUser = addUser(newUser);
      res.json(userShowed(addedUser));
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
];

export const updateUserHandler = [
  ValidateRequest,
  (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updatedUser = updateUser(id, req.body);
      if (updatedUser) {
        res.json(userShowed(updatedUser));
      } else {
        res.status(404).json({ error: "Users not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
];

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
