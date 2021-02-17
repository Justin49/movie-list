export class User {

  readonly idUser: number;// id de l'utilisateur, en readonly car on ne veut pas que la propriété soit en lecture seule et qu'elle ne soit pas modifier
  email: string;// email de l'utilisateur
  name: string;// nom de l'utilisateur
  profilPicture: string;// avatar, photo de profil de l'utilisateur
  moviesList: [];// Liste de film que l'utilisateur peut se créer
  favoriteMovies: [];// Films que l'utilisateur peut ajoutés dans ces favoris
  seenMovie: boolean;// Films que l'utilisateur à vu ou non
  favoriteMoviesLimit: number;// Nombre de film maximum que l'utilisateur peut ajouter dans ces favoris

  // La partie spéciale est le paramètre options du constructeur, si on n'ajoute pas de typage à ce paramètre, le constructeur ressemblerai à ceci constructeur(options = {}), on peut passer un paramètre facultatif, qui a comme valeur par défaut un objet vide. Mais ce qu’on voudrait maintenant, c’est demander à TypeScript de vérifier que l’on passe uniquement des valeurs attendues à notre constructeur. Par exemple, que ferions-nous avec le code suivant : let user = new User(4); Pas grand-chose… Le chiffre passé en paramètre est censé correspondre à quelle propriété de mon objet ? A la place, nous voudrions mettre en place un système qui nous permet de vérifier que seules des variables avec des noms correspondant aux propriétés de mon objet puissent être passé en paramètre du constructeur.
  constructor(options: {
    idUser?: number,
    email?: string,
    name?: string,
    profilPicture?: string,
    moviesList?: [],
    favoriteMovies?: [],
    seenMovie?: boolean,
    favoriteMoviesLimit?: number,

  } = {}) {
    // Nous indiquons à TypeScript que dans que dans notre constructeur nous voulons un objet contenant une liste de propriétés facultatives (grâce à l’opérateur “?”) avec des noms identiques aux propriétés de mon objet. Si une valeur n’est pas définie en paramètre du constructeur, alors c’est la valeur par défaut qui est attribué
    this.idUser = options.idUser || null;
    this.email = options.email || '';
    this.name = options.name || '';
    this.profilPicture = options.profilPicture || '';
    this.moviesList = options.moviesList || [];
    this.favoriteMovies = options.favoriteMovies || [];
    this.seenMovie = options.seenMovie || false;
    this.favoriteMoviesLimit = options.favoriteMoviesLimit || 100;

  }

}
