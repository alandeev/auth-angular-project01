import { IUser } from "./IUser";

export class UserModel implements IUser {
    id: number;
    name: string;
    username: string;
    password: string;
    role: string;
}