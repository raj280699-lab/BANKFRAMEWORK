import {test} from '@playwright/test';
import {registrationpage} from '../pages/registrationpage';
import registerdata from '../test-data/registerdata.json';

test('register test', async ({ page }) => { 
   const registerPage = new registrationpage(page);
   await page.goto( "https://parabank.parasoft.com/parabank/register.htm");
   await registerPage.register(registerdata);
  await registerPage.verifyregistration();



});