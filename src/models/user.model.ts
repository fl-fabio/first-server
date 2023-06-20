import {Address, Name} from '../utils/interfaces/user.interface'
import { City } from './city.model';
  
  export interface User {
    address?: Address;
    id: string;
    name: Name;
    email: string;
    username: string;
    password: string;
    phone: string;
    city: string;
  }