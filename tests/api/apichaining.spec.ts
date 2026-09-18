import { test, expect } from '@playwright/test';

test('API Chaining', async ({ request }) => {

    const createResponse = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'raj',
                job: 'qa engineer'
            }
        }
    );

    expect(createResponse.status()).toBe(201);

    const createBody = await createResponse.json();

    expect(createBody.name).toBe('raj');
    expect(createBody.job).toBe('qa engineer');
    expect(createBody.id).toBeTruthy();

    console.log(createBody);
});