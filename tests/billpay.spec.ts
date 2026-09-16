import {test} from '../fixtures/basefixture';
import{loginpage} from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
import {homepage} from '../pages/homepage';
import {billpaypage} from '../pages/billpaypage';
import billpaydata from '../test-data/billpaydata.json';
//test(async({page})=>{
   
  
// const login = new loginpage(page);
// await login.login(logindata.validuser.username, logindata.validuser.password);

// });

test('billpay',async({page,homepage,billpaypage})=>{

    await page.goto("/");

//const home = new homepage(page);
await homepage.clickbillpay();

//const billpay = new billpaypage(page);
await billpaypage.billpay(billpaydata);

await billpaypage.verifybillpaysuccess();
});