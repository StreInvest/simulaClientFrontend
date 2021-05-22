import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
// import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  url = 'https://streinvestapi.herokuapp.com/investment/fjuhrHbtkje3qUoEqWzo';
  // tslint:disable-next-line: variable-name
  url_c = 'https://streinvestapi.herokuapp.com/consortium/fjuhrHbtkje3qUoEqWzo';

  // tslint:disable-next-line: variable-name
  url_especifico = 'https://streinvestapi.herokuapp.com/investment/specific/fjuhrHbtkje3qUoEqWzo';

  constructor(private snake: MatSnackBar, private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  show(msg: string) {
   this.snake.open(msg, 'X', {
     duration: 3000,
     horizontalPosition: 'right',
     verticalPosition: 'top'
   });
  }

  //&consortium=${consortium}&category=${category}

  listarTodos(page = 1, limit = 10, consortium = 'all', order = 'asc', category = 'all'): Observable<[]> {
    return this.http.get<[]>(`${this.url}?page=${page}&limit=${limit}&order=${order}`);
  }
  listarTodosConsortium(): Observable<[]> {
    return this.http.get<[]>(this.url_c);
  }
  listarEspecifico(id: string): Observable<any> {
    return this.http.get<[]>(`${this.url_especifico}/${id}`);
  }

}
