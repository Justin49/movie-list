// Rôle du SharedModule -> centraliser les importations communes à plusieurs autres modules de l'application, le SharedModule permet de regrouper les composants génériques, les directives et les pipes, le SharedModule consiste uniquement à déclarer ces éléments communs, et à les réexporter ensuite, le SharedModule peut également servir à rassembler les importations récurrentes d'autres modules comme le CommonModule ou le FormsModule pour éviter de réécrire les mêmes importations dans tous les modules de l'applications, le SharedModule doit-être importé dans tous les autres modules qui en ont besoin, y compris le module racine AppModule si besoin
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
