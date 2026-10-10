export class Anime {
    constructor(id, title, watched = false) {
        this.id = id;
        this.title = title;
        this.watched = watched;
        this.type = "Anime";
    }

    withWatched(watched) {
        return new Anime(this.id, this.title, watched);
    }
}
