import{test , expect} from '@playwright/test';

test('Login test', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Welcome')).toBeVisible();
});
