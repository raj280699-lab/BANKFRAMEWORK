export class authapi {
  constructor(private request: any) {}

  async login(username: string, password: string) {
    return await this.request.post('https://reqres.in/api/login', {
      email: username,
      password,
    });
  }
}