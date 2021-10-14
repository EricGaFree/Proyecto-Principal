import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  users: any;
  url: string = "http://localhost:3000/users";
  error: any;

  constructor(private Http: HttpClient) { }

  ngOnInit(): void {
    this.Http.get<any>(this.url).subscribe(data => {
      this.users = data;
    }, error => (this.error = error));
  }

  clickAllBoton() {
    for (const property in this.users) {
      for (const key in this.users[property]) {
        console.log(this.users[property][key]);
      }
    }
  }

}
