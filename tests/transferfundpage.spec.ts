import { test} from '@playwright/test'; 
import {loginpage} from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
import {homepage} from '../pages/homepage';
import {transferfundpage} from '../pages/transferfundpage';

test.beforeEach('Transfer fund test',async({page})=>{
    
     await page.goto("https://parabank.parasoft.com/");

     const login  = new loginpage(page);
     await login.login(logindata.validuser.username, logindata.validuser.password);

    const home = new homepage(page);
    await home.clicktransfer();
      
    const transfer = new transferfundpage(page);
    await transfer.transferfunds("100");

    await transfer.verifytransfersuccess();
});

