import { User } from "../models/api/login";
import { Credentials } from "../models";

const apiUrl: string = import.meta.env.VITE_API_URL;

export async function Login(credentials: Credentials): Promise<Response> {
 const req = await fetch(`${apiUrl}login/`, {
  body: JSON.stringify(credentials),
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
 });

 return req;
}
