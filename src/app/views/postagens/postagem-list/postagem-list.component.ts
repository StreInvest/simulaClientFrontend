import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/services/postagem.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css']
})
export class PostagemListComponent implements OnInit {

  postagens: Array<any> = [];
  consortiun: Array<any> = [];
  pagination: object = {};
  risco = '';

  page = 1;
  limit = 10;
  consortium = 'all';
  order = 'asc';
  category = 'all';
  isLoading = false;

  constructor(private service: PostagemService) { }

  ngOnInit(): void {
    this.listarTodos(this.page, this.limit, this.consortium, this.order, this.category);
  }

  // tslint:disable-next-line: typedef
  listarTodos(page: number, limit: number, consortium: string, order: string, category: string) {
    this.isLoading = true;
    this.service.listarTodos(page, limit, consortium, order, category).subscribe((data: any) => {
      this.postagens = data.response;
      this.pagination = data.paginate;
      this.isLoading = false;

    },
    (error) => {
        this.service.show('Error dados não encontrado!');
    });
  }


  // tslint:disable-next-line: typedef
  pegaConsorcio(consor: any){
    this.listarTodos(this.page, this.limit, consor, this.order, this.category);
  }
  // tslint:disable-next-line: typedef
  pegaCat(categ: any){
    this.listarTodos(this.page, this.limit, this.consortium, this.order, categ);
  }
}
