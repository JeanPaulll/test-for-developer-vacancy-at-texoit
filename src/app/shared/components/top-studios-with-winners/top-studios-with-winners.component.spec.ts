import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopStudiosWithWinnersComponent } from './top-studios-with-winners.component';
import {GenericService} from "../../services/generic.service";
import {Studio} from "../../models/studio.model";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { of as observableOf, of, throwError } from 'rxjs';

fdescribe('TopStudiosWithWinnersComponent', () => {

  let component: TopStudiosWithWinnersComponent;
  let fixture: ComponentFixture<TopStudiosWithWinnersComponent>;
  let service: GenericService<{ studios: Studio[] }>;

  const mockService: { studios: Studio[] } = {
    studios: [new Studio()]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TopStudiosWithWinnersComponent ],
      providers: [
        {
          provide: GenericService,
          useValue: {
            search: () => of(mockService)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStudiosWithWinnersComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(GenericService<{ studios: Studio[] }>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for a studio', () => {
    service = TestBed.inject(GenericService<{ studios: Studio[] }>);
    spyOn(service, 'search').and.returnValue(observableOf(mockService));
    component.search();
    expect(component).toBeTruthy();
  });
});
