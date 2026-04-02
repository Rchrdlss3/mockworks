import { User } from "../types/user";
import { apiUrl } from "./constants";

export const getUsers = async () => {
    try {
        const response = await fetch(`${apiUrl}/user`);
        return response.json();
    } catch (e) {
        console.error(e);
    }
}

export const getUserById = async (query: string) => {
    try {
        const response = await fetch(`${apiUrl}/user?id=${query}`);
        return response.json();
    } catch (e) {
        console.error(e);
    }
}

export const getUserByName = async (query: string) => {
    try {
        const response = await fetch(`${apiUrl}/get-user?name=${query}`);
        return response.json();
    } catch (e) {
        console.error(e);
    }
}

export const updateUser = async (user:User) => {
    try {
        const response = await fetch(`${apiUrl}/edit-user`, {
            headers: {'Content-Type' : 'application/json'},
            method: 'PUT',
            body: JSON.stringify(user)
        });
        return response.json();
    } catch (e) {
        console.error(e)
    }
}