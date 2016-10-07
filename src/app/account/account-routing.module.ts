import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginFormComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AccountRoutingModule {

}