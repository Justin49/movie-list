import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // On indique à Angular que par défault nous souhaitons affiché la page d'accueil à l'adresse /home, nouvelle route par défault créer, on indique à Angular que lorsqu'un utilisateur souhaite accéder à une route vide nous le redirigeons vers /home avec pathMatch on précise que la redirection se fait dans le cas ou la route est vide
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
