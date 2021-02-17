// Rôle du PublicModule -> il va contenir toute les pages publiques de l'application movies-list comme la page d'accueil, la page de connexion et la page d'inscription
import { NgModule } from '@angular/core';
// On remplace l'importation du CommonModule par SharedModule car j'ai exporté CommonModule
import { SharedModule } from '../shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    RegisterModule,
    LoginModule
  ]
})
export class PublicModule { }
