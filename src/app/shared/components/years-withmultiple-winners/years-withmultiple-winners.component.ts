import {Component, HostBinding, OnInit} from '@angular/core';
import {GenericService, IParameters, Projection} from "../../services/generic.service";
import {Year} from "../../models/years.model";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class YearsWithmultipleWinnersComponent
 * @date 20/10/2022
 */
@Component({
    selector: 'app-years-withmultiple-winners',
    templateUrl: './years-withmultiple-winners.component.html'
})
export class YearsWithmultipleWinnersComponent implements OnInit {
    public title = 'Anos que tiveram mais de um vencedor';
    public years: Year[] = [];
    @HostBinding('class') defaultClass = 'card';

    constructor(private readonly genericService: GenericService<{ years: Year[] }>) {
    }

    ngOnInit(): void {
        this.search();
    }

    search(): void {
        const parameters: IParameters = {
            projection: Projection.YEARS_WITH_MULTIPLE_WINNERS
        };
        this.genericService.search(parameters).subscribe((response: { years: Year[] }) => {
            if (Array.isArray(response.years) && response.years.length) this.years = response.years;
        });
    }
}
