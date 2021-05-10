import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar }  from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Postagem } from '../models/postagem.model';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  url = "http://localhost:3000/api/v1/articles"

  constructor(private snake: MatSnackBar, private http: HttpClient) { }

  show(msg: string) {
   this.snake.open(msg, 'X', {
     duration: 3000,
     horizontalPosition: "right",
     verticalPosition: "top"
   })
  }

  create(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(this.url, postagem)
  }

  listarTodos(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.url)
  }

  listarEspecifico(id:number): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.url}/${id}`)
  }

  editar( id:number, postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`${this.url}/${id}`, postagem)
  }

  deletar(id:number): Observable<Postagem>{
    return this.http.delete<Postagem>(`${this.url}/${id}`)
  }

}
