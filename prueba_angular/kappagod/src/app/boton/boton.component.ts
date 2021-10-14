import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // <----

@Component({
    selector: "app-boton",
    templateUrl: "./boton.component.html",
    styleUrls: ["./boton.component.css"]
})
export class BotonComponent {
    title = "http-get";
    users: any;
    url: string = "http://localhost:3000/users";
    error: any;

    constructor(private http: HttpClient) {} // <---

    ngOnInit() {
        // <---
        this.http.get<any>(this.url).subscribe(data => {
            this.users = data[0];
        }, error => (this.error = error));
    }

    onSubmit() {
        let contenedorUsuarios: any = document.getElementById("usuarios");
        let resultado = "<ul>";
        resultado += "<ul>";

        this.users.forEach((user: any) => {
          resultado += `<li><p>${user.apellido}, ${user.nombre}:  ${user.email}</p></li>`
        });
        resultado += "</ul>";

        contenedorUsuarios.innerHTML = resultado;
    }
}
