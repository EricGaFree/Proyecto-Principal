import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { IUser } from "./users.interface";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    private url: string = "http://localhost:3000/users/";
    private users: IUser[] = [];
    error: any;

    constructor(private http: HttpClient) {
        this.http.get<any>(this.url).subscribe(data => {
            this.users = data[0];
        }, error => (this.error = error));
    }

    public getAllUsers() {
        return this.users;
    }

    public getUserByID(name: string) {
        let data: IUser = {
            name: "",
            surname: "",
            email: ""
        };
        this.users.some((user: IUser) => {
            if (name.toLowerCase() === user.name.toLowerCase()) {
                data = user;
            }
        });
        return data;
    }

    public createUser(user: IUser) {
        this.http.post<any>(this.url, user).subscribe(data => {
            console.log(data);
        });
    }
}
