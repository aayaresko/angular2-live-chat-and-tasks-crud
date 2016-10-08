import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { LiveChatModule } from './live-chat/live-chat.module';
import { TasksBoardModule } from './tasks-board/tasks-board.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appConfigData } from './app-config-data';
import { APP_CONFIG } from './app.config';
import { AppRoutingModule } from './app-routing.module';

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
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
    ],
    providers: [
        { provide: APP_CONFIG, useValue: appConfigData }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
