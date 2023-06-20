import { User } from "../models/user.model";

const users: User[] = [
  {
    id: "1",
    name: {
      firstName: "Alfio",
      lastName: "Giuffrida",
    },
    email: "alfio@gmail.com",
    username: "Alfius",
    password: "alfio2023",
    phone: "3395389146",
    city: "123",
  },
  {
    id: "2",
    name: {
      firstName: "Giovanni",
      lastName: "Cordova",
    },
    email: "giovanni@gmail.com",
    username: "Giovannis",
    password: "giovanni2023",
    phone: "3395389146",
    city: "124",
  },
];

export const getUsers = () => {
  return users;
};

export const getUserById = (id: string) => {
  return users.find((user: User) => user.id === id);
};

export const addUser = (user: User) => {
  users.push(user);
  return user;
};

export const updateUser = (id: string, updatedFields: Partial<User>) => {
  const index = users.findIndex((user: User) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedFields };
    return users[index];
  }
  return null;
};

export const deleteUser = (id: string) => {
  const index = users.findIndex((user: User) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    return deleteUser;
  }
  return null;
};
