import {test} from '@playwright/test';
import {homepage} from '../pages/homepage';
import{loginpage} from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
import {openaccountpage} from '../pages/openaccountpage';
test('openaccount',async({page})=>{
   
    await page.goto('https://parabank.parasoft.com/parabank/openaccount.htm');
// const login = new loginpage(page);
//  await login.login(logindata.validuser.username, logindata.validuser.password);

const home = new homepage(page);
  await home.clickopenaccount();

   //console.log(await page.url());

 const openaccount = new openaccountpage(page);
await openaccount.openaccount("CHECKING");

 await openaccount.verifyaccountopened();

    






});
