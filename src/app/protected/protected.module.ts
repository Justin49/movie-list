// Rôle du ProtectedModule -> il va contenir toutes les pages protégées de l'application movies-list, celle où il faudra se connecter pour y accéder comme la page liste de film et la page film favori

// Je génère de nouveau modules supplémentaires, spécifiques à l'application. J'ai préfixé le nom de mes modules par public ou protected, afin de générer nos modules dans les sous-dossiers correspondants au module auxquels ils appartiennent, le paramètre --module permet à Angular CLI de générer un nouveau module et de le l'importer dans le module parent
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MoviesListModule } from './movies-list/movies-list.module';
import { FavoriteMoviesListModule } from './favorite-movies-list/favorite-movies-list.module';
import { ProfilModule } from './profil/profil.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    MoviesListModule,
    FavoriteMoviesListModule,
    ProfilModule
  ]
})
export class ProtectedModule { }
