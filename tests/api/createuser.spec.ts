import {test,expect} from '@playwright/test';

test('create user' ,async({request}) =>{

    // 1. Send request
    // 2. Get response
    // 3. Print status
    // 4. Validate status
    // 5. Read body
    // 6. Validate body

    const response = await request.post('https://reqres.in/api/users',{
       

        data : { name : "raj",
        job : "qa engineer"
    }
}

    );
     
    
    
  expect(response.status()).toBe(201);
  console.log("Status Code:", response.status());
    console.log("Status Text:", response.statusText());
    
  const body = await response.json();
  expect(body.name).toBe("raj");
  expect(body.job).toBe("qa engineer"); 

  console.log(body);

});