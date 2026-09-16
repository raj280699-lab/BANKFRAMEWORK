import {test,expect} from '@playwright/test';
import {authapi} from '../../api/authapi';

test('Login API', async ({ request }) => {

    const authAPI = new authapi(request);

    const response = await authAPI.login(
        'eve.holt@reqres.in',
        'cityslicka'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
     
    const token = body.token;
    console.log(body.token);

        //this is used in real project//
    // const usersResponse = await request.get(
    // 'https://some-api.com/users',
    // {
    //     headers: {
    //         Authorization: `Bearer ${token}`


    expect(body.token).toBeTruthy();
});