export class Todo {
    public id: number;
    public title: string;
    public description: string | null;
    public completed: boolean;

    constructor(id: number, title: string, description: string | null) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}