import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/models/postagem.model';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css']
})
export class PostagemListComponent implements OnInit {
  
  postagens: Array<Postagem> = []

  constructor(private service: PostagemService) { }

  ngOnInit(): void {
    this.listarTodos()
  }

  listarTodos(){
    this.service.listarTodos().subscribe((data:any) => {
      this.postagens = data.data
      for(let i = 0; i <= (this.postagens.length -1); i++){
        if(this.postagens[i].body.length >= 200){
          var bodyer = this.postagens[i].body
        this.postagens[i].body = bodyer.slice(0, 200) + ' ...'
        }
        else {
          this.postagens[i].body = this.postagens[i].body
        }
      }
    },
    (error)=>{
      this.service.show("Error dados não encontrado!")
    })
  }

}
