export class Actor {

  readonly idActor: number;// Identifiant de l'acteur
  firstName: string;// Prénom de l'acteur ou l'actrice
  lastName: string;// Nom de l'acteur ou l'actrice
  movies: [];// Films dans lesquelles à jouer l'acteur ou l'actrice
  birthDate: Date;// Date de naissance de l'acteur ou l'actrice

  constructor( options: {

    idActor?: number,
    firstName?: string,
    lastName?: string,
    movies?: [],
    birthDate?: Date,
  } = {}) {
    this.idActor = options.idActor || null;
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.movies = options.movies || [];
    this.birthDate = options.birthDate || null;
  }
}
