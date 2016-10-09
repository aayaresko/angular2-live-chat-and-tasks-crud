import { Component, OnInit } from '@angular/core';
import { appConfigData } from '../app-config-data';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    private title = appConfigData.name;
    private today = Date.now();

    public constructor() {
    }

    public ngOnInit() {
    }

}
