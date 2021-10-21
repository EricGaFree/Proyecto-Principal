import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "./users.interface";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    private url: string = "http://localhost:3000/users/";
    error: any;

    constructor(private http: HttpClient) {}

    public getAllUsers() {
        return this.http.get(this.url).pipe(
            map(data => {
                return data;
            })
        );
    }

    // public getUserByID(name: string) {
    //     let users = this.getAllUsers();
    //     let data: IUser = {
    //         name: "",
    //         surname: "",
    //         email: ""
    //     };
    //     users.some((user: IUser) => {
    //         if (name.toLowerCase() === user.name.toLowerCase()) {
    //             data = user;
    //         }
    //     });
    //     return data;
    // }

    public createUser(user: IUser) {
        return this.http.post<any>(this.url, user).pipe(
            map(data => {
                return data;
            })
        );
    }
}
