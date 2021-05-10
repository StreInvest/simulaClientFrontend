import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar }  from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
// import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  url = "https://streinvestapi.herokuapp.com/investment/fjuhrHbtkje3qUoEqWzo"
  url_c = "https://streinvestapi.herokuapp.com/consortium/fjuhrHbtkje3qUoEqWzo"

  constructor(private snake: MatSnackBar, private http: HttpClient) { }

  show(msg: string) {
   this.snake.open(msg, 'X', {
     duration: 3000,
     horizontalPosition: "right",
     verticalPosition: "top"
   })
  }


  listarTodos(): Observable<[]> {
    return this.http.get<[]>(this.url)
  }
  
  listarTodosConsortium(): Observable<[]> {
    return this.http.get<[]>(this.url_c)
  }

}
