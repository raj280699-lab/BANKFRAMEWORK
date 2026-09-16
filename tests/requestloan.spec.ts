import { test } from '@playwright/test';
import { loginpage } from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
import { homepage } from '../pages/homepage';
import { requestloan } from '../pages/requestloan';

test.beforeEach(async ({ page }) => {

  await page.goto("/");

  const login = new loginpage(page);

  await login.login(
    logindata.validuser.username,
    logindata.validuser.password
  );
});

test('Request Loan Test', async ({ page }) => {

  const home = new homepage(page);

  await home.clickrequestloan();

  const loan = new requestloan(page);

  await loan.requestloan("1000", "100");

  await loan.verifyloanrequest();
});