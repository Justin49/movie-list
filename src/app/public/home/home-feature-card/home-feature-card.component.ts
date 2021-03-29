import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-feature-card',
  templateUrl: './home-feature-card.component.html',
  styles: [
  ]
})
export class HomeFeatureCardComponent {

  // Donnée attendu par le composant(le titre, l'image et la description), on déclare les données sous forme de propriétés

  // Avec @Input, ont indique que les propriétés sont disponibles et qu'elles devront être injectées par le composant parent qui est home-feature
  @Input() text: string;
  @Input() picture: string;
  @Input() title: string;


}
