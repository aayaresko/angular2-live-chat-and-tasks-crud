import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { appConfigData } from '../app-config-data';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService implements OnDestroy {
    private host = `${appConfigData.endpoint_url}:${appConfigData.socket_port}`;
    private socket;
    public status = new EventEmitter();

    public constructor() {
    }

    public configure(): void {
        this.socket = io(this.host);
    }

    public asObservable(): Observable<any> {
        return Observable.create(
            (observer) => {
                this.socket.on('connect', () => {
                    let status = 'connected';
                    this.status.emit(status);
                    observer.next({ action: status });
                });
                this.socket.on('disconnect', () => {
                    let status = 'disconnected';
                    this.status.emit(status);
                    observer.next({ action: status });
                });
                this.socket.on('chat message', (data) => observer.next({ action: 'chat-message', data: data }));
                this.socket.on('notify others', (data) => observer.next({ action: 'system-message', data: data }));
                return () => this.socket.close();
            }
        );
    }

    /*public broadcast(data: any) {
        this.socket.broadcast.emit('notify others', data);
    }*/

    public send(data: any, type = 'chat message') {
        this.socket.emit(type, data);
    }

    public latest(index: number) {
        this.socket.emit('latest messages', { index: index });
    }

    public subscribeToSocketEvent(name, callback) {
        this.socket.on(name, callback);
    }

    public ngOnDestroy() {
        this.socket.close();
    }
}