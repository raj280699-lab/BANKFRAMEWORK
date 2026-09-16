import { Page, expect } from '@playwright/test';

export class accountoverview {
    constructor(private page: Page) {}

    async verifyaccountoverview() {
        await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
        
    }
}