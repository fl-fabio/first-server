import { User } from "../models/User";

export const users: User[] = [
  {
    id: "1234",
    name: {
      firstName: "Nicola",
      lastName: "Di Bari",
    },
    email: "nicola@gmail.com",
    password: "Nicola2023",
    username: "Nicky",
    phone: "234234234",
  },
  {
    id: "5678",
    name: {
      firstName: "Laura",
      lastName: "Rossi",
    },
    email: "laura@gmail.com",
    password: "Laura123",
    username: "LauRo",
    phone: "987654321",
  },
  {
    id: "9012",
    name: {
      firstName: "Marco",
      lastName: "Bianchi",
    },
    email: "marco@gmail.com",
    password: "Marco2023",
    username: "MarkB",
    phone: "543210987",
  },
  {
    id: "3456",
    name: {
      firstName: "Anna",
      lastName: "Verdi",
    },
    email: "anna@gmail.com",
    password: "Anna123",
    username: "AnnVer",
    phone: "876543210",
  },
];
