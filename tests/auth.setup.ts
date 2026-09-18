import { test as setup, expect } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import logindata from '../test-data/logindata.json';

setup('authenticate', async ({ page }) => {

    await page.goto('/');

    const login = new loginpage(page);

    await login.login(
        logindata.validuser.username,
        logindata.validuser.password
    );

    // Verify login succeeded
    await expect(
        page.getByRole('heading', { name: 'Account Services' })
    ).toBeVisible();

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

});