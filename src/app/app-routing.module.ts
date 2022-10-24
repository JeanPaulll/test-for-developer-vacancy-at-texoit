import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./views/pages/dashboard/dashboard.component";
import {MoviesComponent} from "./views/pages/movies/movies.component";
import {GithubComponent} from "./views/pages/github/github.component";

const routes: Routes = [
    {path: 'dasboard', component: DashboardComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'github', component: GithubComponent},
    {path: "**", redirectTo: "dasboard", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
