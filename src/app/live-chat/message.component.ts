import { Component, Input, OnInit } from '@angular/core';
import { Message } from './message';
import { User } from '../core/user';

@Component({
    selector: 'app-live-chat-message',
    templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
    @Input() public message: Message;
    private author: User;

    public constructor() {
    }

    public ngOnInit() {
        if (this.message && this.message.author_id) {
            this.author = new User(this.message.author);
        }
    }

}
