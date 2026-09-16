import { test, expect } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import { homepage } from '../pages/homepage';
import logindata from '../test-data/logindata.json';

test('Logout test', async ({ page }) => {
  await page.goto('/');

    const login = new loginpage(page);
    await login.login(logindata.validuser.username, logindata.validuser.password);

    const home = new homepage(page);
    await home.clicklogout();

    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
});