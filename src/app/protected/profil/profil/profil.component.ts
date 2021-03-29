import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  // Création d'un observable à partir d'une varible
  public user$;

  constructor() { }

  ngOnInit() {

    this.user$ = of([

      {user: 'Justin Bellanger', name: 'Bellanger', firstName: 'Justin', numberMoviesAddedInFavorite: '45', numberActorsAddedInFavorite: '10', numberFilmMakersAddedInFavorite: '6', numberMoviesSeen: '300'},
    ])
  }

}
