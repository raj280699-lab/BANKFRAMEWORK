import { test } from '@playwright/test';
import { homepage } from '../pages/homepage';
import { requestloan } from '../pages/requestloan';

test('Request Loan Test', async ({ page }) => {
await page.goto('/');


  const home = new homepage(page);
  await home.clickrequestloan();

  const loan = new requestloan(page);
  await loan.requestloan("1000", "100");

  await loan.verifyloanrequest();

});