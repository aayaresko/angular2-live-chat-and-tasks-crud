import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs';
import { User } from './user';
import { appConfigData } from '../app-config-data';

@Injectable()
export class AuthorizationService {
    public headers = new Headers({ 'Content-Type': 'application/json' });
    public requestedUrl = appConfigData.default_path;
    public accessToken = null;
    public user: User;

    constructor(private router: Router, private http: Http) {
        this.accessToken = Cookie.get('access_token');
        if (this.accessToken) {
            this.headers.append('Authorization', `Bearer ${this.accessToken}`);
        }
    }

    public getAccessToken(data): Observable<any> {
        let url = `${appConfigData.endpoint_url}/oauth/token`;
        return this.http
            .post(
                url,
                {
                    grant_type: 'password',
                    client_id: appConfigData.api.client_id,
                    client_secret: appConfigData.api.client_secret,
                    username: data.email,
                    password: data.password,
                },
                {
                    headers: this.headers
                }
            )
            .map((response: Response) => {
                let data = response.json();
                this.accessToken = data.access_token;
                this.headers.append('Authorization', `Bearer ${this.accessToken}`);
                Cookie.set('access_token', this.accessToken);
            })
            .catch(this.handleError);
    }

    public getUserData(): Observable<any> {
        let url = `${appConfigData.api.endpoint_url}/user`;
        return this.http
            .get(url, { headers: this.headers })
            .map((response: Response) => {
                this.user = new User(response.json());
                return this.user;
            })
            .catch(this.handleError);
    }

    public logout() {
        Cookie.delete('access_token');
    }

    public afterLogin() {
        this.router.navigate([this.requestedUrl]);
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}
