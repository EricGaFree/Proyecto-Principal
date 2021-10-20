import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // <----
import { IUser } from "../users.interface";
import { UsersService } from "../users.service";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {
    public users: IUser[] = [];

    title = "http-get";
    userService: UsersService = new UsersService(this.http);

    isValidFormSubmitted = false;

    register: IUser = {
        name: "alberto",
        surname: "martinez",
        email: "algo@algo.com"
    };

    constructor(private http: HttpClient) {} // <---

    ngOnInit() {
        // <---
    }

    getAllUsers() {
        this.userService.getAllUsers().subscribe(users => {
            this.users = <IUser[]>users;
        });
    }

    // getUserByName() {
    //     let name: any = document.getElementById("nombre1");
    //     let container: any = document.getElementById("usuarioID");

    //     let data = this.userService.getUserByID(name.value);

    //     if (data.name === "") {
    //         container.innerHTML = "El usuario introducido no existe";
    //     } else {
    //         container.innerHTML = `<p>${data.surname}, ${data.name}: ${data.email}</p>`;
    //     }
    // }

    createUser(form: NgForm) {
        this.isValidFormSubmitted = false;
        if (form.valid) {
            this.userService.createUser(form.value).subscribe((user: IUser) => {
                this.isValidFormSubmitted = true;
            })
        }
    }
}