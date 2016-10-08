import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiveChatComponent } from './live-chat.component';
import { MessageComponent } from './message.component';
import { MessageFormComponent } from './message-form.component';
import { MessagesListComponent } from './messages-list.component';
import { WindowResizeDirective } from '../window-resize.directive';
import { LiveChatRoutingModule } from './live-chat-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LiveChatRoutingModule,
    ],
    declarations: [
        LiveChatComponent,
        MessageComponent,
        MessageFormComponent,
        MessagesListComponent,
        WindowResizeDirective,
    ],
    exports: [
        LiveChatComponent
    ],
})
export class LiveChatModule {
}
