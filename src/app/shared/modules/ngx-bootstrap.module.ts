// Module ngx-bootstrap créer pour évités d'importer à chaque fois les éléments(composants et directives propre à ngx-bootstrap, factorisation dans son propre module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  exports : [
    AlertModule,
  ]
})
export class NgxBootstrapModule { }
