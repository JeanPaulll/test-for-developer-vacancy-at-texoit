import {Component, HostBinding, OnInit} from '@angular/core';
import {GenericService, IParameters, Projection} from "../../services/generic.service";
import {Studio} from "../../models/studio.model";

@Component({
    selector: 'app-top-studios-with-winners',
    templateUrl: './top-studios-with-winners.component.html',
    styleUrls: ['./top-studios-with-winners.component.scss']
})
export class TopStudiosWithWinnersComponent implements OnInit {

    public title = 'Os 3 melhores estúdios com vencedores';
    public studios: Studio[] = [];
    @HostBinding('class') defaultClass = 'card';

    constructor(private readonly genericService: GenericService<{ studios: Studio[] }>) {
    }

    ngOnInit(): void {
        this.search();
    }

    private filterTheLast(studios: Studio[] = [], amount: number = 3): Studio[] {
        return studios.splice(0, amount);
    }

    search(): void {
        const parameters: IParameters = {
            projection: Projection.STUDIOS_WITH_WIN_COUNT
        };
        this.genericService.search(parameters).subscribe((response: { studios: Studio[] }) => {
            if (Array.isArray(response.studios) && response.studios.length) {
                this.studios = this.filterTheLast(response.studios);
            }
        }, (e) => console.error(e));
    }
}
