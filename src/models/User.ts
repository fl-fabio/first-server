import {Address, Name} from '../utils/types/userInterfaces'
  
  export interface User {
    address?: Address;
    id: string;
    name: Name;
    email: string;
    username: string;
    password: string;
    phone: string;
  }