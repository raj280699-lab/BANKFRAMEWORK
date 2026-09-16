import { Page,expect } from '@playwright/test';

export class transferfundpage{
    constructor(private page: Page){}
    
    async transferfunds(amount:string){
    
        await this.page.fill("input[id='amount']", amount);
        await this.page.selectOption("#fromAccountId", { index: 0 });
        await this.page.selectOption("select[id='toAccountId']", { index: 3 });
        await this.page.click("input[type='submit']");

    }
        async verifytransfersuccess(){
    
 await expect(this.page.locator("body")).toContainText("Transfer Complete!");
}
}