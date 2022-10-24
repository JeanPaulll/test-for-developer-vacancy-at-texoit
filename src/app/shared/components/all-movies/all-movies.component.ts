import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenericService, IParameters} from "../../services/generic.service";
import {Pagination} from "../../models/pagination.model";
import {WinerByYear} from "../../models/winerByYear.model";

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
    private timeout: NodeJS.Timeout | undefined;

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
        const searchForWinner = (movies: WinerByYear[]) => {
            /**
             * Bring both types
             */
            if (winner == 2) {
                this.lisMovies = Object.assign([], movies);
            } else if (winner == 1) {
                this.lisMovies = Object.assign([], movies.filter((r: WinerByYear) => r.winner));
            } else if (!winner) {
                this.lisMovies = Object.assign([], movies.filter((r: WinerByYear) => !r.winner));
            }
        }
        if (year) {
            this.lisMovies = this.savedMovieList.filter((r: WinerByYear) => r.year === year);
        } else {
            this.lisMovies = Object.assign([], this.savedMovieList);
        }
        searchForWinner(this.lisMovies);
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
            this.clearFilterInputs();
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.init = true, 300);
        const waitToFilter = (ms: number) => this.timeout = setTimeout(() => this.filter(), ms);
        this.form.get('forPage')?.valueChanges.subscribe(r => this.fetchMovies());
        this.form.get('year')?.valueChanges.subscribe((r) => {
            clearTimeout(this.timeout)
            if (r.length === 4) waitToFilter(1000);
        });
        this.form.get('winner')?.valueChanges.subscribe((r) => {
            clearTimeout(this.timeout)
            waitToFilter(500);
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

    public clearFormResetMovie(): void {
        this.form.reset();
        this.form.get('winner')?.setValue(2);
        this.form.get('forPage')?.setValue(10);
        this.lisMovies = Object.assign([], this.savedMovieList);
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

    private clearFilterInputs(): void {
        this.form.get('winner')?.setValue(2);
        this.form.get('year')?.setValue('');
    }
}
