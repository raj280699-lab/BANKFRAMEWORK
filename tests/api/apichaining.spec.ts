import { test,expect} from '@playwright/test';

test('API Chaining', async ({ request }) => {

    const createResponse = await request.post('https://reqres.in/api/users', {

        data:{
            name: 'raj',
            job: 'qa engineer'
             }
    });

    //expect(createResponse.status()).toBe(201);

    const createBody = await createResponse.json();

    const userId = createBody.id;
   // console.log('User ID:', userId);

//     const updateResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
//         data: {
//             name: 'raj',
//             job: 'senior qa engineer'
//         }
//     });
//     expect(updateResponse.status()).toBe(200);

//     const deleteResponse = await request.delete(`https://reqres.in/api/users/${userId}`);
//     expect(deleteResponse.status()).toBe(204);


const getresponse = await request.get( `https://reqres.in/api/users/${userId}`);
expect(getresponse.status()).toBe(200);

console.log(userId);

 });