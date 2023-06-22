import { City } from "../models/city.model";
import { User } from "../models/user.model";
import { getInitialUsers, getUsers } from "../services/users.service";

export const searchUserWithCity = (city: string) => {
  const indexOfCityInUsers = getInitialUsers().findIndex((user: User) => 
    user.city === city
);
  if (indexOfCityInUsers !== -1) {
    return true
  } 
  return false;
};
