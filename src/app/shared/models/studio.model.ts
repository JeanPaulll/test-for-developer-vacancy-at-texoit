/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class Studio
 * @description Model class to represent a studio
 * @date 21/10/2022
 */
export class Studio {
    public name = '';
    public winCount = 0;

    constructor(fields?: {
        name?: string,
        winCount?: number
    }) {
        Object.assign(this, fields);
    }
}

