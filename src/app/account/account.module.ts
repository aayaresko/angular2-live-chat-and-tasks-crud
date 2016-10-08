import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './login-form.component';
import { AccountRoutingModule } from './account-routing.module';

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
