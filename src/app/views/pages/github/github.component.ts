import {Component, OnInit} from '@angular/core';

declare const feather: any;

@Component({
    selector: 'app-github',
    templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
        feather.replace();
    }
}
