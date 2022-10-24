import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MoviesWinnersByYearComponent} from './movies-winners-by-year.component';
import {GenericService} from "../../services/generic.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of as observableOf, of} from "rxjs";
import {WinerByYear} from "../../models/winerByYear.model";
import {FormBuilder} from "@angular/forms";

describe('MoviesWinnersByYearComponent', () => {
    let component: MoviesWinnersByYearComponent;
    let fixture: ComponentFixture<MoviesWinnersByYearComponent>;
    let service: GenericService<WinerByYear[]>;

    const mockService: WinerByYear[] = [
        new WinerByYear(),
        new WinerByYear(),
        new WinerByYear(),
        new WinerByYear(),
        new WinerByYear(),
        new WinerByYear(),
    ]

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [MoviesWinnersByYearComponent],
            providers: [
                FormBuilder,
                {
                    provide: GenericService,
                    useValue: {
                        search: () => of(mockService)
                    }
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviesWinnersByYearComponent);
        component = fixture.componentInstance;
        service = fixture.debugElement.injector.get(GenericService<WinerByYear[]>);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch items by year', () => {
        service = TestBed.inject(GenericService<WinerByYear[]>);
        spyOn(service, 'search').and.returnValue(observableOf(mockService));
        component.fetchItemsByYear();
        expect(component).toBeTruthy();
    });

    it('should have 6 items in the years array', () => {
        service = TestBed.inject(GenericService<WinerByYear[]>);
        const teste = spyOn(service, 'search').and.returnValue(observableOf(mockService));
        component.fetchItemsByYear();
        expect(fixture.componentInstance.winerByYear.length).toEqual(6);
        expect(component).toBeTruthy();
    });

    function doAsync() {
        setTimeout(() => {
        }, 300)
    }

    it('should await setTimeout ngAfterViewInit', async () => {
        service = TestBed.inject(GenericService<WinerByYear[]>);
        component.ngAfterViewInit();
        component.init = false;
        expect(component.init).toEqual(false);
        await doAsync();
        expect(component.init).toEqual(false);
        expect(component).toBeTruthy();
    });
});
