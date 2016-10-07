export class Account {
    public constructor(public id: number,
                       public nickname: string,
                       public email: string,
                       public status: number,
                       public created_at: Date = new Date()) {

    }
}
