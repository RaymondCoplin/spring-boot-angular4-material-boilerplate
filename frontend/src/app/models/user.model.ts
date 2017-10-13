export class User {
  
  constructor(
    public id: number,
    public name: string,
    public token: string,
    public role?: string,
  ) {}

  toString() {
    return JSON.stringify(this);
  }

}
