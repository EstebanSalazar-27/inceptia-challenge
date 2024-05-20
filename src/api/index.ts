import { getTokenFromStorage } from "@/helpers/getToken";
import { Credentials } from "@/models/global";
import { Bot, RootLogsReq } from "@/models/api";

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

export async function getBots(): Promise<Bot[]> {
 const token = getTokenFromStorage();
 const req = await fetch(`${apiUrl}clients/`, {
  headers: { Authorization: `JWT ${token}` },
 });
 const res: Promise<Bot[]> = req.json();

 return res;
}

export async function getLogs(searchParam?: string): Promise<RootLogsReq> {
 const token = getTokenFromStorage();
 const req = await fetch(`${apiUrl}inbound-case/${searchParam}`, {
  headers: { Authorization: `JWT ${token}` },
 });
 const res: Promise<RootLogsReq> = req.json();

 return res;
}
