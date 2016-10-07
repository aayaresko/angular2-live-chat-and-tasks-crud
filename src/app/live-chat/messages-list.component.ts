import { Component, OnInit, style, transition, animate, trigger } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'app-live-chat-messages-list',
    templateUrl: './messages-list.component.html',
    animations: [
        trigger('added', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate('300ms, 600ms ease', style({ opacity: 1 }))
            ]),
            transition('* => void', style({ opacity: 0 }))
        ])
    ]
})
export class MessagesListComponent implements OnInit {
    private messages: Message[] = [];

    public constructor(private messageService: MessageService) {
    }

    public ngOnInit() {
        this.messageService.all().then(messages => this.messages = messages);
    }

}
