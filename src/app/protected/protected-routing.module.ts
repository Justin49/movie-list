import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// On ajoute la page Profil
import { ProfilComponent } from './profil/profil/profil.component';

const routes: Routes = [
  { path: 'profil', component: ProfilComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
