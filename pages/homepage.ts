import { Page, expect } from '@playwright/test';

export class homepage{
    constructor (private page : Page){}
    
      async accountsoverview(){
        await this.page.click("a[href='overview.htm']");
     }
  //    async clicktransfer(){
  // await expect(this.page.getByRole('heading', { name: 'Account Services' })).toBeVisible();
  //    }
     async clickopenaccount() {
    await this.page.click("a[href='openaccount.htm']");
  
}
     async clickbillpay(){
     await this.page.click("a[href='billpay.htm']");
 }
 async clickrequestloan() {
  await this.page.getByRole('link', { name: 'Request Loan' }).click();
}

async clickaccountoverview() {
     await this.page.click("a[href='overview.htm']");
 }
    async clicklogout(){
        await this.page.click("a[href='logout.htm']");

    }


    }
