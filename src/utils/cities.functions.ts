import { City } from "../models/city.model";
import { User } from "../models/user.model";
import { getUsers } from "../services/users.service";

export const searchUserWithCity = (city: string) => {
  const indexOfCityInUsers = getUsers().findIndex((user: User) => 
    user.city === city
);
  console.log(indexOfCityInUsers);
  if (indexOfCityInUsers !== -1) {
    return true
  } 
  return false;
};
