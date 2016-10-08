import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthorizationService } from '../core/authorization.service';
import { appConfigData } from '../app-config-data';
import { Task } from './task';

@Injectable()
export class TaskService {
    private endpointUrl = `${appConfigData.api.endpoint_url}/tasks`;
    private headers: Headers;

    public constructor(private http: Http, private authorizationService: AuthorizationService) {
        this.headers = this.authorizationService.headers;
    }

    public save(task: Task): Observable<any> {
        if (task.id) {
            return this.update(task);
        } else {
            return this.store(task);
        }
    }

    public store(task: Task): Observable<any> {
        return this.http
            .post(this.endpointUrl, JSON.stringify(task), { headers: this.headers })
            .map((response: Response) => response)
            .catch(this.handleError);
    }

    public show(id: number): Observable<Task> {
        let url = `${this.endpointUrl}/${id}`;
        return this.http
            .get(url, { headers: this.headers })
            .map((response) => Task.create(response.json()))
            .catch(this.handleError);
    }

    public update(task: Task): Observable<any> {
        let url = `${this.endpointUrl}/${task.id}`;
        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .map((response: Response) => response)
            .catch(this.handleError);
    }

    public all(): Observable<Task[]> {
        return this.http
            .get(this.endpointUrl, { headers: this.headers })
            .map((response: Response) => {
                let items = response.json();
                items.forEach((item, index) => {
                    items[index] = Task.create(item);
                });
                return items;
            })
            .catch(this.handleError);
    }

    public destroy(id: number) {
        let url = `${this.endpointUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .map((response) => response)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }
}
