import express from "express";
import { router as usersApi } from "./routes/users.route";
import { router as citiesApi } from "./routes/cities.route";

export const app = express();

//configure the middleware for body requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/status", (req, res) => {
  res.json({ message: "Server is running!" });
});

//indicate a routes groups with the prefix /users
app.use("/users", usersApi);
app.use("/cities", citiesApi);

app.listen(3000, () => console.log("Server is running!"));
