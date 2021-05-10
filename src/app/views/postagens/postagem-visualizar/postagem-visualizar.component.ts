import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemService } from 'src/app/services/postagem.service';

@Component({
  selector: 'app-postagem-visualizar',
  templateUrl: './postagem-visualizar.component.html',
  styleUrls: ['./postagem-visualizar.component.css']
})
export class PostagemVisualizarComponent implements OnInit {

  title: string = ''
  body: string = ''
  id: any
  public userId: number = 0;

  constructor(private service: PostagemService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.listarEspecifico(this.userId)
  }

  

  
  listarEspecifico(id:number){
    this.service.listarEspecifico(id).subscribe((data:any) => {
      this.title = data.data.title
      this.body = data.data.body  
      this.id = data.data.id 
    },
    (error)=>{
      this.service.show("Erro, postagem não existente")
    })
  }

  deletar(){
    this.service.deletar(this.userId).subscribe((data:any) => {
      this.service.show("Deletado com sucesso")
      this.router.navigate(['/postagem'])
    }, (error)=>{
      this.service.show("Erro ao deletar")
    })
  }

}
