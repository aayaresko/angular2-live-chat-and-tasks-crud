import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../core/authorization.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    constructor(private authorizationService: AuthorizationService) {
    }

    public ngOnInit() {
    }

}
