/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class WinerByYear
 * @description Model class to represent a WinerByYear
 * @date 21/10/2022
 */
export class WinerByYear {
    public id = undefined;
    public year = undefined;
    public title = undefined;
    public studios = [];
    public producers = [];
    public winner = false;

    constructor(fields?: {
        id?: number,
        year?: number,
        title?: string,
        studios?: string[],
        producers: string[]
        winner: boolean
    }) {
        Object.assign(this, fields);
    }
}
