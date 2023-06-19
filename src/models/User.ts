interface Address {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  }
  
  interface Name {
    firstName: string;
    lastName: string;
  }
  
  export interface User {
    address?: Address;
    id: string;
    name: Name;
    email: string;
    username: string;
    password: string;
    phone: string;
  }