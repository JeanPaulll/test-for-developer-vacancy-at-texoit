import {AfterViewInit, Component} from '@angular/core';

declare const feather: any;
/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class DashboardComponent
 * @description Component to show the dashboard screen
 * @date 20/10/2022
 */
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        feather.replace();
    }
}
