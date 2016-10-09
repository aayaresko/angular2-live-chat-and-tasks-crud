import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessageService {
    private models: Message[] = [];
    private index: number = 0;

    public constructor() {
    }

    public cache(model: Message): void {
        this.index = model.id;
        this.models.push(model);
    }

    public all(): Promise<Message[]> {
        return Promise.resolve(this.models);
    }

    public getIndex() {
        return this.index;
    }
}
