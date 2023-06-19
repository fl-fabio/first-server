import axios from "axios";
const apiUrl = "https://fakestoreapi.com/users";

export const getUsers = async () => {
    try {
        const response = await axios.get(apiUrl);
        const users = response.data;
        return users;
    } catch (error){
        console.error("Error while API request", error);
        throw new Error ("An error while the API request");
    }
};