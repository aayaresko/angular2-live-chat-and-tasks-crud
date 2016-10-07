import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserResolveService } from './shared/user-resolve.service';
import { HomeComponent } from './home/home.component';
import { AuthorizationGuard } from './shared/authorization-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                resolve: {
                    user: UserResolveService,
                },
                children: [
                {
                    path: 'home',
                    component: HomeComponent,
                },
                {
                    path: 'live-chat',
                    loadChildren: 'app/live-chat/live-chat.module#LiveChatModule',
                    canLoad: [AuthorizationGuard],
                },
                {
                    path: 'tasks-board',
                    loadChildren: 'app/tasks-board/tasks-board.module#TasksBoardModule',
                    canLoad: [AuthorizationGuard],
                },
            ]},
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {

}