import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/models/postagem.model';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css']
})
export class PostagemListComponent implements OnInit {
  
  postagens: Array<any> = []
  pagination: object = {}

  constructor(private service: PostagemService) { }

  ngOnInit(): void {
    this.listarTodos()
  }

  listarTodos(){
    this.service.listarTodos().subscribe((data:any) => {
     this.postagens = data.response
     this.pagination = data.paginate
    console.log(data.response)
    },
    (error)=>{
      this.service.show("Error dados não encontrado!")
    })
  }

}
