import {Page,expect} from '@playwright/test';

export class billpaypage{
    constructor(private page: Page){}
    
    async billpay(payee: any){  

        await this.page.fill("input[name='payee.name']", payee.name);
        await this.page.fill("input[name='payee.address.street']", payee.address.street);
        await this.page.fill("input[name='payee.address.city']", payee.address.city);
        await this.page.fill("input[name='payee.address.state']", payee.address.state);
        await this.page.fill("input[name='payee.address.zipCode']", payee.address.zipCode);
        await this.page.fill("input[name='payee.phoneNumber']", payee.phoneNumber);
        await this.page.fill("input[name='payee.accountNumber']", payee.accountNumber);
        await this.page.fill("input[name='verifyAccount']", payee.verifyAccount);
        await this.page.fill("input[name='amount']", payee.amount);
       await this.page.selectOption("select[name='fromAccountId']", { index: 0 });
        await this.page.click("input[type='button']");
    }
    async verifybillpaysuccess(){
    
     await expect(this.page.locator("body")).toContainText("Bill Payment Complete");
    }
}