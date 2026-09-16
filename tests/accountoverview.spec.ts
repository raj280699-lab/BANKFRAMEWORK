import { test } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
import { homepage } from '../pages/homepage';
import { accountoverview } from '../pages/accountoverview';

test.beforeEach(async ({ page }) => {

    await page.goto("/");

    const login = new loginpage(page);

    await login.login(
        logindata.validuser.username,
        logindata.validuser.password
    );
});

test('Account Overview Test', async ({ page }) => {

    const home = new homepage(page);

    await home.clickaccountoverview();

    const account = new accountoverview(page);

    await account.verifyaccountoverview();
});