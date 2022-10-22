import {AfterViewInit, Component} from '@angular/core';

declare const feather: any;
/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class MoviesComponent
 * @description Component to show the movie listing screen
 * @date 20/10/2022
 */
@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html'
})
export class MoviesComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        feather.replace();
    }
}
