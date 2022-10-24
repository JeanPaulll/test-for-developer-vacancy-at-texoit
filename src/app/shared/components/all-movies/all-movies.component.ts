import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenericService, IParameters} from "../../services/generic.service";
import {Pagination} from "../../models/pagination.model";
import {WinerByYear} from "../../models/winerByYear.model";

declare const $: any;

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class AllMoviesComponent
 * @description Component to all movies
 * @date 20/10/2022
 */
@Component({
    selector: 'app-all-movies',
    templateUrl: './all-movies.component.html',
    styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit, AfterViewInit {

    public title = 'Listagem de Filmes';
    public lisMovies: WinerByYear[] = [];
    public savedMovieList: WinerByYear[] = [];
    public form: FormGroup = new FormGroup<any>({year: 0});
    public init = false;
    public loading = false;
    public pagination: Pagination<WinerByYear> = new Pagination<WinerByYear>();

    @HostBinding('class') defaultClass = 'card';

    constructor(
        private readonly genericService: GenericService<Pagination<WinerByYear>>,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.createForm();
        this.fetchMovies();
    }

    public filter(): void {
        this.lisMovies = [];
        const winner = +this.form.get('winner')?.value;
        const year = +this.form.get('year')?.value || null;
        const searchForWinner = (justforWinner: boolean = false) => {
            /**
             * Bring both types
             */
            if (winner == 2) {
                this.lisMovies = Object.assign([], this.lisMovies);
            } else if (winner == 1) {
                this.lisMovies = Object.assign([], this.lisMovies.filter((r: WinerByYear) => r.winner));
            } else {
                this.lisMovies = Object.assign([], this.lisMovies.filter((r: WinerByYear) => !r.winner));
            }
            if (justforWinner) {
                this.lisMovies = Object.assign([], this.savedMovieList);
            }
        }
        if (year) {
            this.lisMovies = this.savedMovieList.filter((r: WinerByYear) => r.year === year);
            searchForWinner();
        } else searchForWinner(true);
    }

    fetchMovies(page: number = 1): void {
        this.loading = true;
        const size = +this.form.get('forPage')?.value || 10;
        const parameters: IParameters = {page, size};
        this.genericService.search(parameters).subscribe((response: Pagination<WinerByYear>) => {
            this.lisMovies = response.content.length ? response.content : [];
            this.savedMovieList = Object.assign([], this.lisMovies);
            this.loading = false;
            this.setPagination(response);
        });
    }

    public clearForm(): void {
        this.form.reset();
        this.form.get('winner')?.setValue(2);
        this.form.get('forPage')?.setValue(10);
        this.lisMovies = Object.assign([], this.savedMovieList);
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.init = true, 300);
        this.form.get('forPage')?.valueChanges.subscribe((r) => {
            this.fetchMovies();
        });
    }

    public nextPage(): void {
        const page = this.pagination.number + 1;
        if (page <= this.pagination.totalPages) {
            this.fetchMovies(page);
        } else {
            this.lisMovies = [];
        }
    }

    public backPage(): void {
        const page = this.pagination.number - 1;
        if (page && page <= this.pagination.totalPages) {
            this.fetchMovies(page);
        } else {
            this.lisMovies = [];
        }
    }

    private setPagination(pagination: Pagination<WinerByYear>): void {
        this.pagination = pagination;
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            year: ['', [
                Validators.minLength(4),
                Validators.maxLength(4)]
            ],
            winner: [2],
            forPage: [10],
        });
    }
}
