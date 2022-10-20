import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {GenericService, IParameters} from "../../services/generic.service";
import {WinerByYear} from "../../models/winerByYear.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-movies-winners-by-year',
    templateUrl: './movies-winners-by-year.component.html',
    styleUrls: ['./movies-winners-by-year.component.scss']
})
export class MoviesWinnersByYearComponent implements OnInit, AfterViewInit {

    public title = 'Listar vencedores de filmes por ano';
    public winerByYear: WinerByYear[] = [];
    public form: FormGroup = new FormGroup<any>({year: 0});
    public init = false;

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

    fetchItemsByYear(){
        const parameters: IParameters = {
            winner: true,
            year: this.form.get('year')?.value || 2015
        };
        this.genericService.search(parameters).subscribe((response: WinerByYear[]) => {
            if (response) {
                this.winerByYear = response
            }
        });
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

    ngAfterViewInit(): void {
        setTimeout(()=> this.init = true, 300);
    }
}

