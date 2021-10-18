import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // <----
import { IUser } from "../users.interface";
import { UsersService } from "../users.service";

@Component({
    selector: "app-boton",
    templateUrl: "./boton.component.html",
    styleUrls: ["./boton.component.css"]
})
export class BotonComponent {
    title = "http-get";
    userService: UsersService = new UsersService(this.http);

    constructor(private http: HttpClient) {} // <---

    ngOnInit() {
        // <---
    }

    getAllUsers() {
        let userContainer: any = document.getElementById("usuarios");
        let users = this.userService.getAllUsers();
        let result: string = "<ul>";

        users.forEach((user: IUser) => {
            result += `<li><p>${user.surname}, ${user.name}: ${user.email}</p></li>`;
        });
        result += "</ul>";

        userContainer.innerHTML = result;
    }

    getUserByName() {
        let name: any = document.getElementById("nombre1");
        let container: any = document.getElementById("usuarioID");

        let data = this.userService.getUserByID(name.value);

        if (data.name === "") {
            container.innerHTML = "El usuario introducido no existe";
        } else {
            container.innerHTML = `<p>${data.surname}, ${data.name}: ${data.email}</p>`;
        }
    }

    createUser() {
        let name: any = document.getElementById("nombre2");
        let surname: any = document.getElementById("apellido");
        let email: any = document.getElementById("email");

        let user: IUser = {
            name: name.value,
            surname: surname.value,
            email: email.value
        };

        this.userService.createUser(user);
    }
}
