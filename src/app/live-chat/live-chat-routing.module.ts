import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LiveChatComponent } from './live-chat.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LiveChatComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class LiveChatRoutingModule {

}