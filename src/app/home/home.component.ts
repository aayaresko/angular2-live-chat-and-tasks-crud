import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private authorizationService: AuthorizationService) {
    }

    ngOnInit() {
        console.log(this.authorizationService.user);
    }

}
