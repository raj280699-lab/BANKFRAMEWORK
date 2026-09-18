import { APIRequestContext } from '@playwright/test';
export class authapi {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    return await this.request.post('https://reqres.in/api/login', 
        {
            data:{
      email: email,
      password: password
            }
    });
  }
}