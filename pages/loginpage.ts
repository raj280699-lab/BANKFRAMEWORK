import { Page } from '@playwright/test';
 
export class loginpage{
    constructor (private page : Page){}

    async login(username: string, password: string){
        await this.page.fill("//*[@name='username']",username);
        await this.page.fill("//*[@name='password']",password);
        await this.page.click("//*[@value='Log In']");
    }
}