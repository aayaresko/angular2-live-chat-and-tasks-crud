import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    private mainForm: FormGroup;

    public constructor(private authorizationService: AuthorizationService) {
    }

    public ngOnInit() {
        if (this.authorizationService.accessToken) {
            this.authorizationService.afterLogin();
        }
        this.mainForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    public onSubmit() {
        if (this.mainForm.valid) {
            this.authorizationService.getAccessToken(this.mainForm.value).subscribe(() => this.authorizationService.afterLogin());
        }
    }

}
