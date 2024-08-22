import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pages/LoginPage';
import { CheckoutPageObject } from '../pages/CheckoutPage';
import { ProductPageObject} from '../pages/ProductPage';
import {CreateEShopAccountPageObject} from '../pages/CreateEShopAccountPage';
const tc1Data = require('../test_data/registeruser.json');

tc1Data.forEach((testdata) => {
 
  test('Register user - '+testdata.firstName,
    
   async ({request,page}) => {


//Post method 

let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";

 
const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
    data: {
      "err": "",
      "firstName": testdata.firstName,
      "lastName": testdata.lastName,
      "email": email,
      "password": testdata.password,
      "confirmpassword": testdata.confirmPassword
  }
});
//Response status code , status Ok  , Internal Error server 
//Valid the data >>Contract id , >>Data valid ID Database 
//Headers 
expect(registerUserResponse.ok()).toBeTruthy();
expect(registerUserResponse.statusText()).toEqual("OK");
expect(registerUserResponse.status()).toEqual(200);
console.log(registerUserResponse)
console.log(await registerUserResponse.json())

expect(await registerUserResponse.json()).toMatchObject(
  {
    id: expect.any(Number),
    firstName: testdata.firstName,
    lastName: testdata.lastName,
    email: email,
    password: testdata.password
}
);

const createEShopAccountPageObject = new CreateEShopAccountPageObject(page);
await createEShopAccountPageObject.goto();
await createEShopAccountPageObject.login(email,testdata.password);

  });
}); 
