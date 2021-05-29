import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/services/postagem.service';
import FormateDateBr from '../../../funcoes/formateDateBr';

@Component({
  selector: 'app-consortium',
  templateUrl: './consortium.component.html',
  styleUrls: ['./consortium.component.css']
})
export class ConsortiumComponent implements OnInit {

  constructor(private service: PostagemService) { }

  registerPage: any;
  isLoading = false;
  dataMeu = [];
  currentPage: any;
  page = 1;

  ngOnInit(): void {
    this.listarTodosConsortium();
  }

  // tslint:disable-next-line: typedef
  listarTodosConsortium(page = 1){
    this.service.listarTodosConsortium(page).subscribe((data: any) => {
      // tslint:disable-next-line: no-shadowed-variable
      const datdosConvertidos = data.response.map((item: any, i: any) => {
        const teste1 = FormateDateBr(item.created_at);
        const teste2 = FormateDateBr(item.updated_at);
        i = i + 1;
        return {
          ...item,
          index: i,
          created_at: teste1,
          updated_at: teste2
        };
      });
      this.dataMeu = datdosConvertidos;
      this.currentPage = data.paginate.page;
      this.registerPage = data.paginate.totalCurrentPage;
    }, (error) => {
      this.service.show('Dados não encontrado!');
    } );
  }
  // tslint:disable-next-line: typedef
  pageUp(){
    this.listarTodosConsortium(this.page = this.page + 1);
  }
  // tslint:disable-next-line: typedef
  pageDown(){
    this.listarTodosConsortium(this.page =  this.page - 1);
  }

}
