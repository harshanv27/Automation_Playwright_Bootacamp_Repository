import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pages/LoginPage';
import { CheckoutPageObject } from '../pages/CheckoutPage';
import { ProductPageObject} from '../pages/ProductPage';
const tc1Data = require('../test_data/testdata.json');

tc1Data.forEach((testdata) => {
 
  test('test for user - '+testdata.username,
    
   async ({request }) => {

// Get method 

    // const products = await request.get(`http://34.45.142.80:8180/api/catalogue-rest/product/15`);
    // console.log(products);
   // console.log(await products.json());

//Post method 
/*
let email = Math.random().toString(36).substring(2, 12)+ "@nomail.com";
 
const registerUserResponse = await request.post(`http://34.45.142.80:8180/api/customer-rest/customer/register`, {
    data: {
      "err": "",
      "firstName": "Sam",
      "lastName": "Garaye",
      "email": email,
      "password": "Bootcamp1234",
      "confirmpassword": "Bootcamp1234"
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
    firstName: "Sam",
    lastName: "Garaye",
    email: email,
    password: "Bootcamp1234"
}
);

*/
const cardDetailsVerify = await request.post('http://34.45.142.80:8180/api/payment-rest/payment/pay', {

  data:{
    "amount":2,"credit_card":{"cardNumber":"1111111111111111","cvv":"123","expiration_month":"12","expiration_year":"2025"},
    
}
});
expect(cardDetailsVerify.ok()).toBeTruthy();
expect(cardDetailsVerify.statusText()).toEqual("OK");
expect(cardDetailsVerify.status()).toEqual(200);
console.log(cardDetailsVerify)
console.log(await cardDetailsVerify.json())





  });
}); 
