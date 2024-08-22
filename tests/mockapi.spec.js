import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pages/LoginPage';
import { CheckoutPageObject } from '../pages/CheckoutPage';
import { ProductPageObject} from '../pages/ProductPage';
import {CreateEShopAccountPageObject} from '../pages/CreateEShopAccountPage';
const tc1Data = require('../test_data/registeruser.json');




    test("mocks a fruit and doesn't call api", async ({ page }) => {
        // Mock the api call before navigating
        await page.route('*/**/api/v1/fruits', async route => {
          const json = [{ name: 'Strawberry', id: 21 },{ name: 'Apple', id: 22 },{ name: 'Banana', id: 23 },{ name: 'Kiwi', id: 24 }];
          await route.fulfill({ json });
        });
        // Go to the page
        await page.goto('https://demo.playwright.dev/api-mocking');
        await page.pause();

        await expect(page.getByText('Strawberry')).toBeVisible();



  });
