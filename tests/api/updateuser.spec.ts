import { test, expect } from '@playwright/test';

test('Update User', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2',
        {
            data: {
                name: 'raj kumar',
                job: 'senior qa'
            }
        }
    );

    console.log("Status:", response.status());

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('raj kumar');
    expect(body.job).toBe('senior qa');

    console.log(body);
});