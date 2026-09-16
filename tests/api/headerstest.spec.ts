import { test, expect } from '@playwright/test';

test('Headers Test', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2',
       {
headers: {'Accept': 'application/json'}
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body);

});