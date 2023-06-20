import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../services/users.service";
import { ValidateRequest } from "../middleware/bodyParser";
import { getCityById } from "../services/cities.service";
import { User } from "../models/user.model";
import { City } from "../models/city.model";
import { userShowed } from "../utils/users.functions";

export const getUsersHandler = (req: Request, res: Response) => {
  try {
    const users = getUsers();
    const usersShowed = users.map((user: User) => {
      return userShowed(user);
    })
    res.json(usersShowed);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

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
