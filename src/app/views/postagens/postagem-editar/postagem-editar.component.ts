import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/models/postagem.model';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-postagem-editar',
  templateUrl: './postagem-editar.component.html',
  styleUrls: ['./postagem-editar.component.css']
})
export class PostagemEditarComponent implements OnInit {

  conteudo = ''
  titulo = ''

    title = ''
    body = ''
    public userId = 0

    constructor(private service: PostagemService, private route: ActivatedRoute, private router: Router) { 
      this.route.params.subscribe(params => this.userId = params['id']);
    }

  ngOnInit(): void {
  }



  editar(){
    this.service.editar(this.userId, {"title": this.title, "body": this.body}).subscribe((dados:any) => {
      this.titulo = dados.data.title
      this.conteudo = dados.data.body
      this.service.show("Atualizado com sucesso!")
      this.router.navigate(["/postagem/visualizar", this.userId])
    },
    (error)=>{
      this.service.show("Erro ao atualizar")
    })
  }
}
