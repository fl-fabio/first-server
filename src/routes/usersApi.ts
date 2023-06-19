import { Router } from "express";
import {v4 as uuidV4} from 'uuid';
import {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
} from "../functions/usersFunction";
import { User } from "../models/User";

export const router = Router();

router.get("/", (req, res) => {
  try {
    /*  const users: User[] = await getUsers(); */
    const users = getUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const users = getUsers();
    /* const user = users.find((user: User) => user.id.toString() === id); */
    const user = getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(500).json({ error: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", (req,res) => {
    try {
        const newUser = {
            id : uuidV4(),
            ...req.body
        };
        const addedUser = addUser(newUser);
        res.json(addedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = updateUser(id, req.body);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: "Users not found" });
        }
    }catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:id", (req,res) => {
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
});
