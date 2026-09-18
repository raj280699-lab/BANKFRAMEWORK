import { Page } from '@playwright/test';

export class loginpage {
    constructor(private page: Page) {}

    async login(username: string, password: string) {

        await this.page.locator("[name='username']").fill(username);

        await this.page.locator("[name='password']").fill(password);

        await this.page.locator("input[value='Log In']").click();
    }
}