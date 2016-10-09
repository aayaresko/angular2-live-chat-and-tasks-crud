export class Task {
    public constructor(public title: string,
                       public content: string,
                       public author_id: number,
                       public author: any = null,
                       public created_at: Date = new Date(),
                       public id = 0) {

    }

    static create(item) {
        //let date = Date.create(item.created_at).toISOString();
        return new Task(item.title, item.content, item.author_id, item.author, new Date(), item.id);
    }
}
