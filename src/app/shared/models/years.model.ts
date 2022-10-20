/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class Year
 * @description Model class to represent a years
 * @date 21/10/2022
 */
export class Year {
    public winnerCount = undefined;
    public year = undefined;

    constructor(fields?: {
        winnerCount?: number | unknown,
        year?: number | unknown,
    }) {
        Object.assign(this, fields);
    }
}

