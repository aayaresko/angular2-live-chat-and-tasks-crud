import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LiveChatModule } from './live-chat/live-chat.module';
import { TasksBoardModule } from './tasks-board/tasks-board.module';
import { AccountModule } from './account/account.module';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationService } from './shared/authorization.service';
import { AuthorizationGuard } from './shared/authorization-guard.service';
import { UserResolveService } from './shared/user-resolve.service';
import { appConfigData } from './app-config-data';
import { APP_CONFIG } from './app.config';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AccountModule,
        LiveChatModule,
        TasksBoardModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
    ],
    providers: [
        UserResolveService,
        AuthorizationService,
        AuthorizationGuard,
        Cookie,
        { provide: APP_CONFIG, useValue: appConfigData }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
