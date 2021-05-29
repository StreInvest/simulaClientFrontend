import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/services/postagem.service';
import FormateDateBr from '../../../funcoes/formateDateBr'

@Component({
  selector: 'app-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css']
})
export class PostagemListComponent implements OnInit {

  postagens: Array<any> = [];
  consortiun: Array<any> = [];
  pagination: object = {};
  currentPage: any;
  risco = '';

  page = 1;
  limit = 10;
  consortium = 'all';
  order = 'desc';
  category = 'all';
  isLoading = false;
  registerPage: any;

  constructor(private service: PostagemService) { }

  ngOnInit(): void {
    this.listarTodos(this.page, this.limit, this.consortium, this.order, this.category);
  }

  // tslint:disable-next-line: typedef
  listarTodos(page: number, limit: number, consortium: string, order: string, category: string) {
    this.isLoading = true;
    this.service.listarTodos(page, limit, consortium, order, category).subscribe((data: any) => {
      this.pagination = data.paginate;
      this.currentPage = data.paginate.page;
      this.registerPage = data.paginate.totalCurrentPage;;
      this.isLoading = false;

      const datdosConvertidos = data.response.map((item: any, i: any) => {
        const teste1 = FormateDateBr(item.created_at);
        const teste2 = FormateDateBr(item.updated_at);
        return {
          ...item,
          created_at: teste1,
          updated_at: teste2
        };
      });
      this.postagens = datdosConvertidos;
    },
    (error: any) => {
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
  // tslint:disable-next-line: typedef
  ascbrabo(){
    this.listarTodos(this.page, this.limit, this.consortium, 'asc', this.category);
  }
  // tslint:disable-next-line: typedef
  descbrabo(){
    this.listarTodos(this.page, this.limit, this.consortium, 'desc', this.category);
  }
  // tslint:disable-next-line: typedef
  pageUp(){
    this.listarTodos(this.page = this.page + 1, this.limit, this.consortium, 'asc', this.category);
  }
  // tslint:disable-next-line: typedef
  pageDown(){
    this.listarTodos(this.page = this.page - 1, this.limit, this.consortium, 'asc', this.category);
  }
}
