export class ListResponse<T> {
    public total: number;
    public page: number;
    public per_page: number;

    public items: Array<T>;

    constructor(resourceType, body: any, meta: any) {
        this.total = meta.total;
        this.page = meta.page;
        this.per_page = meta.per_page;
        this.items = body.map(item => {
            return new resourceType(item);
        });
    }
}
