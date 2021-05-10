import { Component, OnInit } from '@angular/core';
import { PostagemService } from 'src/app/services/postagem.service';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/models/postagem.model';



@Component({
  selector: 'app-postagem-criar',
  templateUrl: './postagem-criar.component.html',
  styleUrls: ['./postagem-criar.component.css']
})
export class PostagemCriarComponent implements OnInit {



  postagem: Postagem = {
    title: '',
    body: ''
  }

  constructor(private service: PostagemService, private router: Router) { }

  ngOnInit(): void {}


  create(){
    this.service.create(this.postagem).subscribe(() => {
      this.service.show("Registrado com sucesso!")
      this.router.navigate(["/postagem"])
    },
    (error)=>{
      this.service.show("Erro ao registrar")
    })
  }


  btn(){
    this.service.show("ola")
  }
  canc(){
    this.router.navigate(['/postagem'])
  }

}
