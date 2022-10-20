import {TestBed} from '@angular/core/testing';
import {GenericService, IParameters, Projection} from './generic.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";

describe('MovieService', () => {
  let service: GenericService<any>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenericService<any>]
    }).compileComponents();
    service = TestBed.inject(GenericService<any>);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must call generic function', () => {
    const parameters: IParameters = {};
    service.search(parameters)
    expect(service).toBeTruthy();
  });

  it('deve busca embossadoras com filtro', () => {
    const parameters: IParameters = {
      projection: Projection.STUDIOS_WITH_WIN_COUNT
    };
    service.search(parameters).subscribe((data) => {
      expect(data).toEqual('www.texoit.com');
    });
    const req = httpMock.expectOne(
        `${environment.api}?projection=studios-with-win-count`
    );
    expect(req.request.method).toBe('GET');
    req.flush('www.texoit.com');
    httpMock.verify();
  });
});
