import { Page, expect } from '@playwright/test';

export class requestloan {
  constructor(private page: Page) {}

  async requestloan(loanAmount: string, downPayment: string) {

    await this.page.fill("input[id='amount']", loanAmount);

    await this.page.fill("input[id='downPayment']", downPayment);

    await this.page.selectOption("select[id='fromAccountId']", { index: 0 });

    await this.page.click("input[value='Apply Now']");
  }

  async verifyloanrequest() {

    await expect(this.page.locator("body"))
      .toContainText("Loan Request Processed");
  }
}