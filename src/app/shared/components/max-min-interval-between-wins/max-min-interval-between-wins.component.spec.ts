import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GenericService} from "../../services/generic.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of as observableOf, of} from "rxjs";
import {MaxMinIntervalBetweenWinsComponent} from "./max-min-interval-between-wins.component";
import {MaxMin} from "../../models/max-min.model";

describe('MaxMinIntervalBetweenWinsComponent', () => {
    let component: MaxMinIntervalBetweenWinsComponent;
    let fixture: ComponentFixture<MaxMinIntervalBetweenWinsComponent>;
    let service: GenericService<{ min: MaxMin[], max: MaxMin[] }>;

    const mockService: { min: MaxMin[], max: MaxMin[] } = {
        min: [
            new MaxMin(),
            new MaxMin(),
            new MaxMin(),
            new MaxMin(),
            new MaxMin(),
        ],
        max: [
            new MaxMin(),
            new MaxMin(),
            new MaxMin(),
        ]
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [MaxMinIntervalBetweenWinsComponent],
            providers: [
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
        fixture = TestBed.createComponent(MaxMinIntervalBetweenWinsComponent);
        component = fixture.componentInstance;
        service = fixture.debugElement.injector.get(GenericService<{ min: MaxMin[], max: MaxMin[] }>);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch items by MaxMin', () => {
        service = TestBed.inject(GenericService<{ min: MaxMin[], max: MaxMin[] }>);
        spyOn(service, 'search').and.returnValue(observableOf(mockService));
        component.search();
        expect(component).toBeTruthy();
    });

    it('should have 6 items in the MaxMin array', () => {
        service = TestBed.inject(GenericService<{ min: MaxMin[], max: MaxMin[] }>);
        const teste = spyOn(service, 'search').and.returnValue(observableOf(mockService));
        component.search();
        expect(component.maxMin.max.length).toEqual(3);
        expect(component.maxMin.min.length).toEqual(5);
        expect(component).toBeTruthy();
    });
});
