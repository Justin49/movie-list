// Pourquoi les modules public et protected ont pour parent le module core ? Le CoreModule à pour rôle de décharger au maximum le AppModule, qui doit conserver que son rôle de module racine, avec le strict minimum à l'intérieur. Pour les modules Protected et Public, on les charge donc dans le CoreModule, et non dans le AppModule.

// Rôle du CoreModule -> décharger le module racine des importations globales, importer le CoreModule uniquement dans le module racine AppModule(ne jamais l'importer dans un autre module), importer tout les services dans le CoreModule, possibilité d'ajouter des composants globaux dans l'application, exemple : un composant représentant une icône de chargement, un pied de page, une barre de navigation, il s'agit de composant utilisable que dans le template racine app.component.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
// La librairie ngx-bootstrap nécéssite le module de Angular dédié aux anmations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from '../core/components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    BrowserAnimationsModule
  ],
  exports: [
    // On exporte les composants que l'on à besoin de réutiliser sur plusieurs page de notre site
    FooterComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
