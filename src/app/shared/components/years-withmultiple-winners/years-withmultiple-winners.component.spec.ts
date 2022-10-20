import {ComponentFixture, TestBed} from '@angular/core/testing';
import {YearsWithmultipleWinnersComponent} from './years-withmultiple-winners.component';
import {GenericService} from "../../services/generic.service";
import {Studio} from "../../models/studio.model";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of as observableOf, of} from "rxjs";
import {Year} from "../../models/years.model";

describe('YearsWithmultipleWinnersComponent', () => {

  let component: YearsWithmultipleWinnersComponent;
  let fixture: ComponentFixture<YearsWithmultipleWinnersComponent>;
  let service: GenericService<{ years: Year[] }>;

  const mockService: { years: Year[] } = {
    years: [new Year(), new Year(), new Year(), new Year()]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [YearsWithmultipleWinnersComponent],
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
    fixture = TestBed.createComponent(YearsWithmultipleWinnersComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(GenericService<{ studios: Studio[] }>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for a years', () => {
    service = TestBed.inject(GenericService<{ studios: Studio[] }>);
    spyOn(service, 'search').and.returnValue(observableOf(mockService));
    component.search();
    expect(component).toBeTruthy();
  });

  it('should have 4 items in the years array', () => {
    service = TestBed.inject(GenericService<{ studios: Studio[] }>);
    const teste = spyOn(service, 'search').and.returnValue(observableOf(mockService));
    console.log('teste', teste);
    component.search();
    expect(fixture.componentInstance.years.length).toEqual(4);
    expect(component).toBeTruthy();
  });
});
