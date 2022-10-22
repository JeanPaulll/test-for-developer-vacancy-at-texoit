/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class Pagination
 * @description Model class to represent a Pagination
 * @date 22/10/2022
 */
export class Pagination<T> {

    public content = [];
    public first = false;
    public last = false;
    public number = 0;
    public numberOfElements = 0;
    public pageable = {};
    public offset = 0;
    public pageNumber = 0;
    public pageSize = 0;
    public paged = true;
    public sort = {};
    public empty = true;
    public sorted = false;
    public unsorted = true;
    public unpaged = false;
    public size = 0;
    public totalElements = 0;
    public totalPages = 0;

    constructor(fields?: {
        content?: any[],
        first?: boolean,
        last?: boolean,
        number?: number,
        numberOfElements?: number,
        pageable?: any;
        offset?: number,
        pageNumber?: number,
        pageSize?: number,
        paged?: boolean;
        sort?: any;
        empty?: boolean;
        sorted?: boolean,
        unsorted?: boolean;
        unpaged?: boolean;
        size?: number,
        totalElements?: number,
        totalPages?: number
    }) {
        Object.assign(this, fields);
    }
}



