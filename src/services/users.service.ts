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
  {
    id: "3",
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
    id: "4",
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

export const getUsers = (
  query: { [key: string]: string } = {},
  skip?: number,
  limit?: number
): User[] => {
  const acceptedKeys = ["city", "username"];
  let filteredUsers = users;
  for (const key in query) {
    if (acceptedKeys.includes(key)) {
      filteredUsers = filteredUsers.filter((user: User) => {
        return user[key as keyof User] === query[key];
      });
    }
  }
 
  if (skip && limit){
    filteredUsers = filteredUsers.slice(skip, skip + limit);
  }

  return filteredUsers;
};

export const getUsersByCity = (city: string) =>
  users.filter((user) => user.city === city);

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
