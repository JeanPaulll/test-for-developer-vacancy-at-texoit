/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class MaxMin
 * @description Model class to represent a MaxMin
 * @date 21/10/2022
 */
export class MaxMin {
    public producer = '';
    public interval = undefined;
    public previousWin = undefined;
    public followingWin = undefined;

    constructor(fields?: {
        producer?: string,
        interval?: number,
        previousWin?: number,
        followingWin?: number,
    }) {
        Object.assign(this, fields);
    }
}

