import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {
    MaxMinIntervalBetweenWinsComponent
} from "./shared/components/max-min-interval-between-wins/max-min-interval-between-wins.component";
import {GenericService} from "./shared/services/generic.service";
import {of} from "rxjs";
import {WinerByYear} from "./shared/models/winerByYear.model";

describe('AppComponent', () => {
    let service: GenericService<WinerByYear[]>;
    const mockService: string = 'Test for developer at texoit';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

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

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Test for developer at texoit'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Test for developer at texoit');
    });

    it('should no render title in footer', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('app-footer')?.textContent).toEqual('');
    });
});
