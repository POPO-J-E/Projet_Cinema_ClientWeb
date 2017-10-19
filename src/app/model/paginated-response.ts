export class PaginatedResponse<D> {
    constructor(
        public _embedded: D,
    ) {
    }
}
