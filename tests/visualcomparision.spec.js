import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pages/LoginPage';
import { CheckoutPageObject } from '../pages/CheckoutPage';
import { ProductPageObject} from '../pages/ProductPage';
const tc1Data = require('../test_data/testdata.json');

tc1Data.forEach((testdata) => {
 
  test('test for Visual Comparison - '+testdata.username,
    
   async ({ page,request }) => {


    await page.goto("http://34.45.142.80:3000/");
    page.pause();
    await expect(page.locator(".footer")).toHaveScreenshot({ maxDiffPixels: 100 });

});

});