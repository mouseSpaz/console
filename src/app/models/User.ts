export class User {
    id?: number = null;
    name?: string = null;
    email?: string = null;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
