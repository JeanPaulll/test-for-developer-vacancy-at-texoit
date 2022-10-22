import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from './views/pages/dashboard/dashboard.component';
import {MoviesComponent} from './views/pages/movies/movies.component';
import {NgxMaskModule} from "ngx-mask";
import {MessagesControlModule} from "./shared/utils/messages-control-validations/messages-control.module";
import {GithubComponent} from './views/pages/github/github.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MoviesComponent,
        GithubComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        MessagesControlModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
