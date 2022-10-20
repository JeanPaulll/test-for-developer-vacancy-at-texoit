import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {
    YearsWithmultipleWinnersComponent
} from './components/years-withmultiple-winners/years-withmultiple-winners.component';
import { TopStudiosWithWinnersComponent } from './components/top-studios-with-winners/top-studios-with-winners.component';
import { MaxMinIntervalBetweenWinsComponent } from './components/max-min-interval-between-wins/max-min-interval-between-wins.component';
import { MoviesWinnersByYearComponent } from './components/movies-winners-by-year/movies-winners-by-year.component';
import {NgxMaskModule} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {MessagesControlModule} from "./utils/messages-control-validations/messages-control.module";

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        YearsWithmultipleWinnersComponent,
        TopStudiosWithWinnersComponent,
        MaxMinIntervalBetweenWinsComponent,
        MoviesWinnersByYearComponent,
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        YearsWithmultipleWinnersComponent,
        TopStudiosWithWinnersComponent,
        MaxMinIntervalBetweenWinsComponent,
        MoviesWinnersByYearComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxMaskModule,
        ReactiveFormsModule,
        MessagesControlModule
    ]
})
export class SharedModule {
}
