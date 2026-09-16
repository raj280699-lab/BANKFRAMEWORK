import{test} from '@playwright/test';
import{loginpage} from '../pages/loginpage';
import logindata from '../test-data/logindata.json';
test('Login test',async({page})=>{
   
    await page.goto("https://parabank.parasoft.com/");

     const loginPage = new loginpage(page);
     await loginPage.login(logindata.validuser.username, logindata.validuser.password);
    
});