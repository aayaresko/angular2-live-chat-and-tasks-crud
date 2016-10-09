export class Message {
    public constructor(public content: string,
                       public author_id: number = null,
                       public author: any = null,
                       public created_at: Date = new Date(),
                       public type = 'chat-message',
                       public id = 0) {
    }
}