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

    obtenerUsuarios() {
        let contenedorUsuarios: any = document.getElementById("usuarios");
        let resultado: string = "<ul>";

        this.users.forEach((user: any) => {
            resultado += `<li><p>${user.apellido}, ${user.nombre}: ${user.email}</p></li>`;
        });
        resultado += "</ul>";

        contenedorUsuarios.innerHTML = resultado;
    }

    obtenerUsuarioNombre() {
        let nombre: any = document.getElementById("nombre1");
        let contenedor: any = document.getElementById("usuarioID");
        let resultado: string = "";

        this.users.forEach((user: any) => {
            if (user.nombre.toLowerCase() === nombre.value.toLowerCase()) {
                resultado = `<p>${user.apellido}, ${user.nombre}: ${user.email}</p>`;
            }
        });

        if (resultado === "") {
            contenedor.innerHTML = "El usuario introducido no existe";
        } else {
            contenedor.innerHTML = resultado;
        }
    }

    crearUsuario() {
        let nombre: any = document.getElementById("nombre2");
        let apellidos: any = document.getElementById("apellido");
        let email: any = document.getElementById("email");

        this.http
            .post<any>(this.url, {
                nombre: nombre.value,
                apellido: apellidos.value,
                email: email.value
            })
            .subscribe(data => {
                const datos = data;
                console.log(datos);
            });
    }
}
