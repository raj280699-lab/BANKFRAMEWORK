import {test} from '@playwright/test';
import{loginpage} from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
import {homepage} from '../pages/homepage';
import {openaccountpage} from '../pages/openaccountpage';
test('openaccount',async({page})=>{
   
    await page.goto("/");
const login = new loginpage(page);
await login.login(logindata.validuser.username, logindata.validuser.password);

const home = new homepage(page);
await home.clickopenaccount();

const openaccount = new openaccountpage(page);
await openaccount.openaccount("SAVINGS");

await openaccount.verifyaccountopened();

    






});
