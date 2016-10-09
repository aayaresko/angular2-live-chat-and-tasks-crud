import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { LiveChatModule } from './live-chat/live-chat.module';
import { TasksBoardModule } from './tasks-board/tasks-board.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header.component';
import { FooterComponent } from './core/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appConfigData } from './app-config-data';
import { APP_CONFIG } from './app.config';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        AccountModule,
        LiveChatModule,
        TasksBoardModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        { provide: APP_CONFIG, useValue: appConfigData }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
