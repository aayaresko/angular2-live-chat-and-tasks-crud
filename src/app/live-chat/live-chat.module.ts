import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LiveChatRoutingModule } from './live-chat-routing.module';
import { WindowResizeDirective } from '../window-resize.directive';
import { LiveChatComponent } from './live-chat.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageFormComponent } from './shared/message-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';

@NgModule({
    imports: [
        SharedModule,
        LiveChatRoutingModule,
    ],
    declarations: [
        LiveChatComponent,
        MessageDetailComponent,
        MessageFormComponent,
        MessagesListComponent,
        WindowResizeDirective,
    ]
})
export class LiveChatModule {

}
