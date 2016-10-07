import { Component, OnInit, trigger, style, transition, animate, OnDestroy } from '@angular/core';
import { SocketService } from '../shared/socket.service';
import { MessageService } from './message.service';
import { AuthorizationService } from '../shared/authorization.service';
import { Message } from './message';
import { User } from '../shared/user';

@Component({
    selector: 'app-live-chat',
    templateUrl: './live-chat.component.html',
    animations: [
        trigger('form', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate('300ms, 600ms easeInOutBack', style({ opacity: 1 })),
            ]),
            transition('* => void', style({ opacity: 0 }))
        ]),
        trigger('notification', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate('300ms, 600ms easeInOutBack', style({ opacity: 1 })),
            ]),
            transition('* => void', style({ opacity: 0 }))
        ])
    ],
    providers: [
        SocketService,
        MessageService,
    ]
})
export class LiveChatComponent implements OnInit, OnDestroy {
    private user: User;
    public connectionStatus = 'disconnected';

    public constructor(private socketService: SocketService, private messageService: MessageService, private authorizationService: AuthorizationService) {
    }

    public ngOnInit() {
        this.user = this.authorizationService.user;
        this.socketService.configure();
        this.socketService.asObservable().subscribe(
            (item) => this.process(item),
            (error) => console.log(error)
        );
        this.socketService.status.subscribe((status) => {
            this.connectionStatus = status;
        });
    }

    public ngOnDestroy() {
        this.socketService.status.unsubscribe();
    }

    public onPersistMessage(message: any) {
        this.socketService.send({ message: message });
    }

    private process(item) {
        let data;
        let action = item.action;
        switch (action) {
            case 'connected':
                data = {
                    message: new Message(' has connected', this.user.account.id)
                };
                this.socketService.send(data, 'notification');
                this.socketService.latest(this.messageService.getIndex());
                break;
            case 'chat-message':
            case 'system-message':
                data = item.data.message;
                let message = new Message(data.content, data.author_id, data.author, data.created_at, action, data.id);
                this.messageService.cache(message);
                break;
        }
    }
}
