export class Movie {

  readonly idMovie: number;// Id du film
  name: string;// Nom du film
  releaseDate: Date;// Date de sortie du film
  filmMaker: string;// Réalisateur du film
  actors: [];// Acteurs du film
  kind: [];// Genre du film
  storyline: string;// Synopsis du film
  sameKindOfMovie: [];// Film qui se rapproche du film aimé par l'utilisateur
  moviePicture: string;// Fiche du film

  constructor(options: {
    idMovie?: number,
    name?: string,
    releaseDate?: Date,
    filmMaker?: string,
    actors?: [],
    kind?: [],
    storyline?: string,
    sameKindOfMovie?: [],
    moviePicture?: string,

  } = {}) {
    this.idMovie = options.idMovie || null;
    this.name = options.name || '';
    this.releaseDate = options.releaseDate || null;
    this.filmMaker = options.filmMaker || '';
    this.actors = options.actors || [];
    this.kind = options.kind || [];
    this.storyline = options.storyline || '';
    this.sameKindOfMovie = options.sameKindOfMovie || [];
    this.moviePicture = options.moviePicture || '';
  }
}
