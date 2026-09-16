import{Page,expect} from '@playwright/test';

export class openaccountpage{
    constructor(private page: Page){}
    
    async openaccount(accounttype:string){
        await this.page.selectOption("select[id='type']", accounttype);
        await this.page.selectOption("select[id='fromAccountId']", {index:0});
        await this.page.click("input[value='Open New Account']");
        }
    async verifyaccountopened(){
        await expect(this.page.locator("body")).toContainText("Congratulations, your account is now open.");
    }
    }