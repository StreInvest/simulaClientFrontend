import { query } from '@angular/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostagemListComponent } from './views/postagens/postagem-list/postagem-list.component';
import { InvesSpecificComponent } from './views/inves/inves-specific/inves-specific.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'investimentos', component: PostagemListComponent},
  {path: 'visualizar/:id', component: InvesSpecificComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
