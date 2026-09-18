import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: 1,

  reporter:[['html',],['list']],

  use: {
    headless: false,
     screenshot: 'only-on-failure',
     video: 'retain-on-failure',
     trace: 'retain-on-failure',
      baseURL: 'https://parabank.parasoft.com/parabank',
       // storageState: 'playwright/.auth/user.json'
  },
  projects: [
  {
    name: 'setup',
    testMatch: /auth\.setup\.ts/,
    use: {
      storageState: undefined
    }
  },
{
    name: 'Chrome',
    use: { 
      browserName: 'chromium',
      storageState: 'playwright/.auth/user.json'
     },
    
    dependencies: ['setup']
  },
  {
    name: 'Firefox',
    use: { browserName: 'firefox' ,
      storageState: 'playwright/.auth/user.json'
    },
    dependencies: ['setup']
  },
  
  {
    name: 'Safari',
    use: { browserName: 'webkit', 
      storageState: 'playwright/.auth/user.json'
    },
    dependencies: ['setup']
  },
  
]
});