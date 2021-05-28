import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-consortium',
  templateUrl: './consortium.component.html',
  styleUrls: ['./consortium.component.css']
})
export class ConsortiumComponent implements OnInit {

  constructor(private service: PostagemService) { }

  isLoading = false;
  dataMeu = [];

  ngOnInit(): void {
    this.listarTodosConsortium();
  }

  // tslint:disable-next-line: typedef
  listarTodosConsortium(){
    this.service.listarTodosConsortium().subscribe((data: any) => {
      this.dataMeu = data.response;
    }, (error) => {
      this.service.show('Dados não encontrado!');
    } );
  }

}
