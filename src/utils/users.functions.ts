import { City } from "../models/city.model";
import { User } from "../models/user.model";
import { getCities, getCityById } from "../services/cities.service";

export const userShowed = (user: User) => {
    return {...user, city: getCityById(user.city) as City}
}
