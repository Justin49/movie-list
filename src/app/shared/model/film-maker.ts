export class FilmMaker {

  readonly idFilmMaker: number;// Identifiant de l'acteur
  firstName: string;// Prénom de l'acteur ou l'actrice
  lastName: string;// Nom de l'acteur ou l'actrice
  movies: [];// Films dans lequel à jouer l'acteur ou l'actrice
  birthDate: Date;// Date de naissance de l'acteur ou l'actrice

  constructor( options: {

    idFilmMaker?: number,
    firstName?: string,
    lastName?: string,
    movies?: [],
    birthDate?: Date,
  } = {}) {
    this.idFilmMaker = options.idFilmMaker || null;
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.movies = options.movies || [];
    this.birthDate = options.birthDate || null;
  }
}
