import { test as setup } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import logindata from '../test-data/logindata.json';

setup('authenticate', async ({ page }) => {

    await page.goto('/');

    const login = new loginpage(page);

    await login.login(
        logindata.validuser.username,
        logindata.validuser.password
    );

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

});