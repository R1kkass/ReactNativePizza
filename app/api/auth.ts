import axios from "axios";
import $api from "../axios";

export interface IAuth {
    email: string;
    password: string;
}

export interface IRegistration extends IAuth {
    basketId: number;
}

export const AuthApi = {
    async login(data: IAuth):Promise<string> {
        const res = await $api.post("/user/login", data);
        let cookie: string | undefined = res.headers["set-cookie"]?.[0];
        cookie = cookie?.replace("refresh_token=", "").replace(/\;.*/, "");
        return String(cookie);
    },
    async registration(data: IRegistration):Promise<string> {
        const res = await $api.post("/user/registration", data);
        let cookie: string | undefined = res.headers["set-cookie"]?.[0];
        cookie = cookie?.replace("refresh_token=", "").replace(/\;.*/, "");
        return String(cookie);
    },
};
