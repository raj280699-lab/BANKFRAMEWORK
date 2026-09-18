// import { Page } from '@playwright/test';

// export class registrationpage{
//     constructor(private page: Page){}
    
//     async register(userdata:any){
//        const uniqueuser = `${Date.now()}`;
//     //    const unique = Date.now().toString();[you can write this type also]
//         console.log("Generated Username:", uniqueuser);
//         await this.page.click('text=Register');
//         await this.page.fill("//*[@name='customer.firstName']", userdata.firstname);
//             await this.page.fill("//*[@name='customer.lastName']",userdata.lastname)
// await this.page.fill("//*[@id='customer.address.street']",userdata.address);
// await this.page.fill("//*[@id='customer.address.city']",userdata.city);
// await this.page.fill("//*[@id='customer.address.state']",userdata.state);
// await this.page.fill("//*[@id='customer.address.zipCode']",userdata.zip.toString());
// await this.page.fill("//*[@id='customer.phoneNumber']",userdata.phone.toString());
// await this.page.fill("//*[@id='customer.ssn']",userdata.ssn.toString());
// await this.page.fill("//*[@id='customer.username']",uniqueuser);
// await this.page.fill("//*[@id='customer.password']",userdata.password);
// await this.page.fill("//*[@id='repeatedPassword']",userdata.password);
// await this.page.click("//*[@value='Register']");


//     }
//     async verifyregistration(){
//        console.log(await this.page.locator("body").textContent());

//     }
// }