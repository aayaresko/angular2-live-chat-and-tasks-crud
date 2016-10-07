export class AccountProfile {
    public constructor(public first_name: string,
                       public last_name: string,
                       public birth_date: Date,
                       public avatar_url: string,
                       public account_id: number,
                       public created_at: Date = new Date()) {
    }
}
