export class Kdrama {
    constructor(id, title, watched = false) {
        this.id = id;
        this.title = title;
        this.watched = watched;
        this.type = "Kdrama";
    }

    withWatched(watched) {
        return new Kdrama(this.id, this.title, watched);
    }
}
