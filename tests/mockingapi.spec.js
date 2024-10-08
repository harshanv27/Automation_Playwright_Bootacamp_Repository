import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pages/LoginPage';
import { CheckoutPageObject } from '../pages/CheckoutPage';
import { ProductPageObject} from '../pages/ProductPage';
import {CreateEShopAccountPageObject} from '../pages/CreateEShopAccountPage';
const tc1Data = require('../test_data/registeruser.json');

tc1Data.forEach((testdata) => {
 
  test('Register user - '+testdata.firstName,
    
   async ({request,page}) => {

    await page.route('*/**/api/catalogue-rest/product/15', async route => {
        const json = [
            {
                "id": 1234561,
                "productCode": "a214a774ce2a4e52b8fd85608458b59c",
                "productName": "Vivo 15 mg Iphone 16",
                "productImage": "Apple-iPhone-6s-Plus.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 488.8,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234562,
                "productCode": "83e50bc3a2ce47308ae8959720c3a206",
                "productName": "Samsung 18 mg iphone 18",
                "productImage": "Apple-iPhone-7.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 498,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234563,
                "productCode": "0e0df788dad84da395c72a0d7ee7cbe4",
                "productName": "Apple iPhone 7 Plus",
                "productImage": "Apple-iPhone-7-Plus.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 558.5,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234564,
                "productCode": "8a18e96b9efc42ef9ca93f49acb49e77",
                "productName": "Apple iPhone 8",
                "productImage": "Apple-iPhone-8.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 598.5,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234565,
                "productCode": "6efefabae2804b4f9119814a15bb292b",
                "productName": "Apple iPhone X",
                "productImage": "Apple-iPhone-X.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 798,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234566,
                "productCode": "eeb0da370c7b447eb3416c04189cb76e",
                "productName": "Apple iPhone XR",
                "productImage": "Apple-iPhone-XR.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 698,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234567,
                "productCode": "630888a1a34147899741050feee1dc97",
                "productName": "Apple iPhone XS",
                "productImage": "Apple-iPhone-XS.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 758,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234568,
                "productCode": "666f0b91e0604e1d9f2def6b9b0641b0",
                "productName": "Apple Watch Series 4",
                "productImage": "Apple-Watch-Series-4.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 258,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 1234569,
                "productCode": "d3c1e8570d054a37abc64bcec402db67",
                "productName": "Apple Watch Series 4 Aluminum",
                "productImage": "Apple-Watch-Series-4-Aluminum.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 268,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345610,
                "productCode": "2f4dee319f6a4e87a1d3ff30a27e91b2",
                "productName": "Fitbit Ace 2",
                "productImage": "Fitbit-Ace-2.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 119,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345611,
                "productCode": "37d12a8af767485fac75e694719d9d0e",
                "productName": "Fitbit Charge 3",
                "productImage": "Fitbit-Charge-3.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 129,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345612,
                "productCode": "c23e4ff754b044c89748e0f08628bf33",
                "productName": "Fitbit Charge 3 Special Edition",
                "productImage": "Fitbit-Charge-3-Special-Edition.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 150,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345613,
                "productCode": "1a816f4162db481faa172fc7c5828f20",
                "productName": "Fitbit Inspire HR",
                "productImage": "Fitbit-Inspire-HR.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 160,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345614,
                "productCode": "b9ab866cdaac4a4b9fad38c13d43d1d4",
                "productName": "Fitbit Inspire HR White",
                "productImage": "Fitbit-Inspire-HR-White.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 183.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345615,
                "productCode": "c4613ef3062746cd8d99a653dc62e7f2",
                "productName": "Fitbit Versa",
                "productImage": "Fitbit-Versa.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 121.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345616,
                "productCode": "87e0615943ce4692bf9e98304bbf999c",
                "productName": "Fitbit Versa SE",
                "productImage": "Fitbit-Versa-SE.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 144.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345617,
                "productCode": "1faefa627bf94e5396c5d99bde3b4d84",
                "productName": "Garmin fenix 5S",
                "productImage": "Garmin-fenix-5S.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 199.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345618,
                "productCode": "92335feef4404aae830f47b99bed84cc",
                "productName": "Garmin Forerunner 35",
                "productImage": "Garmin-Forerunner-35.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 209.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345619,
                "productCode": "71ecea3f6d424636b5de9f959c5860a0",
                "productName": "Garmin Forerunner 235",
                "productImage": "Garmin-Forerunner-235.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 220,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345620,
                "productCode": "eb7e1907f0d440efaa63d81361e8af44",
                "productName": "Garmin Vivoactive 3",
                "productImage": "Garmin-Vivoactive-3.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 200,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345621,
                "productCode": "ffe1b1bd2bfc4c3b98c8feb3692b9d25",
                "productName": "Garmin Vivoactive 3 blue",
                "productImage": "Garmin-Vivoactive-3-blue.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 249.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345622,
                "productCode": "c8ba2501a5154767814bf9f0b45ed8c2",
                "productName": "Google Pixel 3",
                "productImage": "Google-Pixel-3.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 349,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345623,
                "productCode": "e9f93ec4f68140b6b2d9c763e93cbdd4",
                "productName": "Google Pixel 3 XL",
                "productImage": "Google-Pixel-3-XL.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 399,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345624,
                "productCode": "2015463102d5497d8140e15161a57893",
                "productName": "Hive Wireless Sensor",
                "productImage": "Hive-Wireless-Sensor.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 194.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345625,
                "productCode": "c21870eb170c4cc88123e72b1947d0f9",
                "productName": "Honor 10 Dual SIM Smartphone",
                "productImage": "Honor-10-Dual-SIM-Smartphone.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 249.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345626,
                "productCode": "89f7dced7d264a10a12ba86d844bc7e4",
                "productName": "Honor 10 Lite",
                "productImage": "Honor-10-Lite.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 220,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345627,
                "productCode": "c8cd5ac3a8d14de28328158a537e84df",
                "productName": "Honor Play Dual Sim",
                "productImage": "Honor-Play-Dual.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 229,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345628,
                "productCode": "1071cb3336f54873891901d4769aa366",
                "productName": "Honor View 20",
                "productImage": "Honor-View-20.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 429.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345629,
                "productCode": "8fe811a2968443978f11cc3c1f4681a7",
                "productName": "Huawei Band 3 Pro",
                "productImage": "Huawei-Band-3-Pro.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 69,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345630,
                "productCode": "4b3f650049df4f9d922ed105bdbe22f2",
                "productName": "Huawei Mate 20",
                "productImage": "Huawei-Mate-20.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 204,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345631,
                "productCode": "afddac2d05ec46c4ab2f56f89d562fe1",
                "productName": "Huawei P20 Lite",
                "productImage": "Huawei-P20-Lite.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 189,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345632,
                "productCode": "cd5a798439fa40269f5922b14806e381",
                "productName": "Huawei P30 Pro",
                "productImage": "Huawei-P30-Pro.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 189.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345633,
                "productCode": "48eb111d73e14269a8116a69a78fffcd",
                "productName": "Huawei P smart",
                "productImage": "Huawei-P-smart.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 149.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345634,
                "productCode": "c10a8d54315b4f73908487a83f55cbe2",
                "productName": "iPhone 6S",
                "productImage": "iPhone-6S.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 349.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345635,
                "productCode": "4f72a67ae1794a9cb3244faadfd08c22",
                "productName": "Motorola g6",
                "productImage": "Motorola-g6.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 210,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345636,
                "productCode": "462f56511ae94baa9ae2d693c5454241",
                "productName": "Motorola g7",
                "productImage": "Motorola-g7.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 250,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345637,
                "productCode": "a962a32d41554f3588eaf176702d784c",
                "productName": "Nest Learning Thermostat",
                "productImage": "Nest-Learning-Thermostat.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 140,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345638,
                "productCode": "783b3a8f292949a598fabfff922c9bcb",
                "productName": "Nokia 7 1 Smartphone",
                "productImage": "Nokia-7-1-Smartphone.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 269.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345639,
                "productCode": "272c3795cc6049049da5ed551879453c",
                "productName": "OnePlus 6T",
                "productImage": "OnePlus-6T.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 499.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345640,
                "productCode": "72d87f1632114fb1a1374acf81805fef",
                "productName": "OnePlus 7 Pro",
                "productImage": "OnePlus-7-Pro.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 712,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345641,
                "productCode": "ef7e7a43cc4048af82318960d252e979",
                "productName": "OnePlus 7 Smartphone",
                "productImage": "OnePlus-7-Smartphone.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 570,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345642,
                "productCode": "df02c52b99774e28b4d13630529eb1ba",
                "productName": "Philips Hue Go",
                "productImage": "Philips-Hue-Go.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 67.95,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345643,
                "productCode": "fab4f8e8214244b3b1d621e239d3b692",
                "productName": "Samsung Galaxy A50",
                "productImage": "Samsung-Galaxy-A50.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 319.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345644,
                "productCode": "854c42a743814f22b2af85554749a1e9",
                "productName": "Samsung Galaxy A70",
                "productImage": "Samsung-Galaxy-A70.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 399,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345645,
                "productCode": "484152cc463e418787537738647ba6df",
                "productName": "Samsung Galaxy Note9",
                "productImage": "Samsung-Galaxy-Note9.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 979,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345646,
                "productCode": "1007665b3ab847d1a31a478d8baf06d3",
                "productName": "Samsung Galaxy S8",
                "productImage": "Samsung-Galaxy-S8.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 310,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345647,
                "productCode": "ab80d68995454126a364631561620980",
                "productName": "Samsung Galaxy S9",
                "productImage": "Samsung-Galaxy-S9.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 427,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345648,
                "productCode": "a1d2ce222b0d40b98a9e7d3d8508cfb4",
                "productName": "Samsung Galaxy S10e",
                "productImage": "Samsung-Galaxy-S10e.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 499,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345649,
                "productCode": "f404538157e8435ebd27cd4fea3a7a6d",
                "productName": "Samsung Galaxy Watch",
                "productImage": "Samsung-Galaxy-Watch.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 174,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345650,
                "productCode": "1ff2d75da90040c2a323e28c563cdf8a",
                "productName": "Samsung Galaxy Watch Active",
                "productImage": "Samsung-Galaxy-Watch-Active.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 174.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345651,
                "productCode": "354120024cb446289dcc005f51143e62",
                "productName": "Withings Move",
                "productImage": "Withings-Move.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 74.99,
                "productQuantity": 20,
                "inStock": true
            },
            {
                "id": 12345652,
                "productCode": "908977cfd51c4cd8b2ce087b21a7f93b",
                "productName": "Withings Steel HR",
                "productImage": "Withings-Steel-HR.jpg",
                "productDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "productPrice": 154.99,
                "productQuantity": 20,
                "inStock": true
            }
        ]
        await route.fulfill({ json });
      });
      // Go to the page
      await page.goto('http://34.45.142.80:3000/');
      await page.pause();
      await expect(page.getByText('Vivo 15 mg Iphone 16')).toBeVisible();

  });
}); 
