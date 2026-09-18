# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: requestloan.spec.ts >> Request Loan Test
- Location: tests/requestloan.spec.ts:5:5

# Error details

```
Error: page.goto: The Internet connection appears to be offline.
Call log:
  - navigating to "https://parabank.parasoft.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { homepage } from '../pages/homepage';
  3  | import { requestloan } from '../pages/requestloan';
  4  | 
  5  | test('Request Loan Test', async ({ page }) => {
> 6  | await page.goto('/');
     |            ^ Error: page.goto: The Internet connection appears to be offline.
  7  | 
  8  | 
  9  |   const home = new homepage(page);
  10 |   await home.clickrequestloan();
  11 | 
  12 |   const loan = new requestloan(page);
  13 |   await loan.requestloan("1000", "100");
  14 | 
  15 |   await loan.verifyloanrequest();
  16 | 
  17 | });
```