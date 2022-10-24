import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {GenericService, IParameters} from "../../services/generic.service";
import {WinerByYear} from "../../models/winerByYear.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class MoviesWinnersByYearComponent
 * @date 20/10/2022
 */
@Component({
    selector: 'app-movies-winners-by-year',
    templateUrl: './movies-winners-by-year.component.html'
})
export class MoviesWinnersByYearComponent implements OnInit, AfterViewInit {

    public title = 'Listar vencedores de filmes por ano';
    public winerByYear: WinerByYear[] = [];
    public form: FormGroup = new FormGroup<any>({year: 0});
    public init = false;
    public loading = false;

    @HostBinding('class') defaultClass = 'card';

    constructor(
        private readonly genericService: GenericService<WinerByYear[]>,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.createForm();
        this.fetchItemsByYear();
    }

    fetchItemsByYear(): void {
        this.loading = true;
        const parameters: IParameters = {
            winner: true,
            year: this.form.get('year')?.value || 2015
        };
        this.genericService.search(parameters).subscribe((response: WinerByYear[]) => {
            if (response) {
                this.winerByYear = response
            }
            this.loading = false;
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.init = true, 300);
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            year: ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(4)]
            ],
        });
    }
}

