import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postagem-crud',
  templateUrl: './postagem-crud.component.html',
  styleUrls: ['./postagem-crud.component.css']
})
export class PostagemCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCreate(){
    this.router.navigate(['/postagem/criar']);
  }

}
