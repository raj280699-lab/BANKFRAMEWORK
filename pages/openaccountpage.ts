import{Page,expect} from '@playwright/test';

export class openaccountpage{
    constructor(private page: Page){}
    
    async openaccount(accounttype:string){

          //await expect(this.page.locator("#OpenAccountForm")).toBeVisible();
// "select[xpath='1']"
await this.page.locator('#type').selectOption({label: accounttype});
        await this.page.locator('//*[@id="fromAccountId"]').selectOption({index:0});
        await this.page.locator("input[value='Open New Account']").click();
        }
     async verifyaccountopened(){
         await expect(this.page.locator("body")).toContainText("Congratulations, your account is now open.");
    }
}