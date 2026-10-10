export class Movie {
    constructor(id, title, watched = false) {
        this.id = id;
        this.title = title;
        this.watched = watched;
        this.type = "Movie";
    }

    withWatched(watched) {
        return new Movie(this.id, this.title, watched);
    }
}
