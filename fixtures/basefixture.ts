import {test as base } from '@playwright/test';
import { homepage } from '../pages/homepage';   
import {billpaypage } from '../pages/billpaypage';

type myfixture = {
    homepage: homepage;
    billpaypage: billpaypage;
};

export const test = base.extend<myfixture>({

homepage: async ({page},use) =>{
    await use(new homepage(page));
},

billpaypage: async ({page},use) =>{
    await use(new billpaypage(page));
}
});
