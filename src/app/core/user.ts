import { Account } from '../account/account';
import { AccountProfile } from '../account/account-profile';
import { appConfigData } from '../app-config-data';

export class User {
    public account: Account;
    public profile: AccountProfile;

    public constructor(data: any) {
        if (data.hasOwnProperty('nickname')) {
            this.account = new Account(data.id, data.nickname, data.email, data.status, data.created_at);
            if (data.hasOwnProperty('profile')) {
                let profile = data.profile;
                this.profile = new AccountProfile(profile.first_name, profile.last_name, profile.birth_date, profile.avatar_url, profile.account_id);
            }
        }
    }

    public getFullName() {
        if (this.account) {
            if (this.profile) {
                let full_name = `${this.profile.first_name} ${this.profile.last_name}`;
                full_name = full_name.trim();
                if (full_name !== '') {
                    return full_name;
                }
            }
            return this.account.nickname;
        }
    }

    public getAvatarUrl() {
        if (this.profile) {
            return `${appConfigData.uploads_path}/thumbnail/${this.profile.avatar_url}`;
        }
    }

    public getDetailUrl() {
        return `/en/account/show/${this.account.id}`;
    }
}
