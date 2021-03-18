// Rôle de AppModule -> appModule à pour rôle de contenir le composant principal de l'application et de lié les modules entre eux pour former une hiérarchie de module, tous les modules doivent être reliés à un moment ou à un autre, sinon il n'éxiste pas

// Un module n'exporte un module que si celui-ci contient un composant, une directive, ou un pipe, et qu'ont a besoin de ces éléments ailleurs dans l'application
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
