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

    fetchMovies(page: number = 1): void {
        this.loading = true;
        const size = +this.form.get('forPage')?.value || 1;
        const parameters: IParameters = {
            page,
            size,
            winner: (!!+this.form.get('winner')?.value),
            year: this.form.get('year')?.value || 2015
        };
        this.genericService.search(parameters).subscribe((response: Pagination<WinerByYear>) => {
            this.lisMovies = response.content.length ? response.content : [];
            this.loading = false;
            this.setPagination(response);
            this.initDataTable();
        });
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
            winner: [1],
            forPage: [1],
        });
    }

    public clearForm(): void {
        this.form.reset();
    }

    private initDataTable(): void {
        $('#dataTableExample').DataTable({
            "aLengthMenu": [
                [10, 30, 50, -1],
                [10, 30, 50, "Tudo"]
            ],
            "iDisplayLength": 10,
            language: {
                url: "assets/js/pt_br.json"
            }
        });
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
}
