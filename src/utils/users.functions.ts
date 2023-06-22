import { City } from "../models/city.model";
import { User } from "../models/user.model";
import { getCities, getCityById } from "../services/cities.service";

export const userShowed = (user: User) => {
  return { ...user, city: getCityById(user.city) as City };
};

/**
 * gg
 * @param users 
 * @returns 
 */
export const usersShowed = (users: User[]) =>
  users.map((user: User) => userShowed(user));
