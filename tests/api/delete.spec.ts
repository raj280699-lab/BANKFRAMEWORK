import { test, expect } from '@playwright/test';

test('Delete User', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2');

    console.log("Status:", response.status());
    console.log("Status Text:", response.statusText());

    expect(response.status()).toBe(204);
});