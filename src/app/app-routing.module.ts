import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostagemCriarComponent } from './views/postagens/postagem-criar/postagem-criar.component';
import { PostagemCrudComponent } from './views/postagens/postagem-crud/postagem-crud.component';
import { PostagemEditarComponent } from './views/postagens/postagem-editar/postagem-editar.component';
import { PostagemVisualizarComponent } from './views/postagens/postagem-visualizar/postagem-visualizar.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'postagem', component: PostagemCrudComponent},
  {path: 'postagem/criar', component: PostagemCriarComponent},
  {path: 'postagem/visualizar/:id', component: PostagemVisualizarComponent},
  {path: 'postagem/editar/:id', component: PostagemEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
