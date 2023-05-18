import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  user: User = {
    "username": "codermonkey",
    "name": "nicolò", //mi serve un pipe che trasforma in uppercase la prima lettera
    "surname": "esposito",
    "yob": 1999, //mi serve un pipe che calcola l'età
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum deserunt odit id vitae culpa? Animi tempore, voluptates aliquid reiciendis molestiae praesentium odio optio distinctio nihil veniam esse magni repudiandae?"
    //mi serve un pipe che tronchi la descrizione dopo 30 caratteri e aggiunga 3 puntini
  }

}

export interface User {
  username: string
  name: string
  surname: string
  yob: number
  description: string
}

