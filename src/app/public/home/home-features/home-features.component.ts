import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ]
})
export class HomeFeaturesComponent implements OnInit {
  features;

  constructor() { }

  ngOnInit(): void {
    // On passe les différentes données aux composants HomeFeatures pour les transmettres au composant HomeFeatureCard
    this.features = [
      {
        title: 'Ajouter des films dans vos favoris',
        text: 'Vous pourrez créer votre propre liste de films et ajouter les films que vous affectionnez tout particulièrement dans la liste de vos films favoris, vous pourrez mettre jusqu\'à 50 films dans vos favoris',
        picture: 'assets/images/film.jpg'
      },
      {
        title: 'Gérer votre liste de film',
        text: 'Vous pourrez supprimer un film de la liste de vos films favoris et cocher si vous l\'avez déjà vu ou non',
        picture: 'assets/images/liste-film.jpg'
      },
      {
        title: 'Gérer vos réalisateur/trice, acteur/trice préférer',
        text: 'Vous pourrez ajouter les réalisateur et acteur dans vos favori et voir les films en lien avec c\'est dernier ',
        picture: 'assets/images/realisateur.jpg'
      }
    ]
  }

}
