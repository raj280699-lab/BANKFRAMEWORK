import {test,expect} from '@playwright/test';
import {authapi} from '../../api/authapi';

test('Login API', async ({ request }) => {

    const authAPI = new authapi(request);

    const response = await authAPI.login(
        'eve.holt@reqres.in',
        'cityslicka'
    );
     console.log('Status:', response.status());

    // expect(response.status()).toBe(200);

    const body = await response.json();

    console.log('Response Body:', body);
    console.log('Token:',body.token);


    expect(response.status()).toBe(200);
    expect(body.token).toBeTruthy();
   

});