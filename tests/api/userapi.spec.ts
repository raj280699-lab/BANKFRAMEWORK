import { test, expect } from '@playwright/test';
import { userapi } from '../../api/userapi';

test('Get Users', async ({ request }) => {

    const userAPI = new userapi(request);

    const response = await userAPI.getUsers();
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.page).toBe(2);
});