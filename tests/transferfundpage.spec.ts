import { test, expect} from '@playwright/test'; 
import {loginpage} from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
// import {homepage} from '../pages/homepage';
// import {transferfundpage} from '../pages/transferfundpage';

test('Transfer fund test',async({page})=>{
    
    await page.goto("https://parabank.parasoft.com/parabank/transfer.htm");

    //  const login  = new loginpage(page);
    //  await login.login(logindata.validuser.username, logindata.validuser.password);

    //  const home = new homepage(page);
    //  await home.clicktransfer();
      
    // const transfer = new transferfundpage(page);
    // await transfer.transferfunds("100");

    // await transfer.verifytransfersuccess();



    await page.fill('#amount', "100");
        await page.selectOption("#fromAccountId", { index: 0 });
        await expect(page.locator('#toAccountId')).toBeVisible();
        await page.selectOption("select[id='toAccountId']", { index: 1 });
        await page.locator("input[value='Transfer']").click();
        
            await expect(page.locator('body'))
        .toContainText('Transfer Complete!');


});

