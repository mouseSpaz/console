export class User {
    id?: number = null;
    username?: string = null;
    email?: string = null;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
