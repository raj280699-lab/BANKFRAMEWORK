import {test,expect} from '@playwright/test';
import{loginpage} from '../pages/loginpage';
import {homepage} from '../pages/homepage';
import logindata from '../test-data/logindata.json';

test('verify account overview',async ({page})=> {
    
   await page.goto('https://parabank.parasoft.com/parabank/index.htm');

   const loginPage = new loginpage(page);
   await loginPage.login(logindata.validuser.username, logindata.validuser.password);

   const homePage = new homepage(page);
   await homePage.accountsoverview();

   
    await expect(page.getByRole("heading", { name: "Accounts Overview" })).toContainText("Accounts Overview");








});