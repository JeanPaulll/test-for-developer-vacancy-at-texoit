/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class Movie
 * @description Model class to represent a movie
 * @date 20/10/2022
 */
export class Movie {
    public id = undefined;
    public year = 0;
    public title = '';
    public studios = [];
    public producers = [];
    public winner = false;

    constructor(fields?: {
        id?: number | unknown,
        year?: number,
        title?: string,
        studios?: string[],
        producers?: string[],
        winner?: boolean,
    }) {
        Object.assign(this, fields);
    }
}

