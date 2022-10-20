import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

export interface IParameters {
    projection?: Projection;
    winner?: boolean;
    page?: number;
    size?: number;
    year?: number;
}

export enum Projection {
    YEARS_WITH_MULTIPLE_WINNERS = 'years-with-multiple-winners',
    STUDIOS_WITH_WIN_COUNT = 'studios-with-win-count',
    MAX_MIN_WIN_INTERVAL_FOR_PRODUCERS = 'max-min-win-interval-for-producers',
}

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class GenericService
 * @description Class to represent movie-related service
 * @date 21/10/2022
 */
@Injectable({
    providedIn: 'root'
})
export class GenericService<T> {
    private API: string;

    constructor(
        private http: HttpClient
    ) {
        this.API = environment.api;
    }

    public search(parameters: IParameters = {}): Observable<T> {
        let params: HttpParams = new HttpParams();
        const result = Object.entries(parameters);
        result.forEach((el) => {
            if (el[1] !== undefined && el[1] !== null) {
                // @ts-ignore
                params = params.set(el[0], el[1]);
            }
        });
        return this.http
            .get<T>(`${this.API}`, {params})
            .pipe(map((response: T) => response));
    }
}
