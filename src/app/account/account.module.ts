import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
    imports: [
        SharedModule,
        AccountRoutingModule
    ],
    declarations: [
        LoginFormComponent
    ]
})
export class AccountModule {

}
