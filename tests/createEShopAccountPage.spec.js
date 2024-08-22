import { test, expect } from '@playwright/test';
import { CreateEShopAccountPageObject } from '../pages/CreateEShopAccountPage';
const { faker } = require('@faker-js/faker');

const firstName = faker.person.firstName();
const lastName =faker.person.lastName();
const email = faker.internet.email();
const password =faker.internet.password();

test('SC1-validate password error Message',async({page})=>{

    const createEShopAccountPageObject= new CreateEShopAccountPageObject(page);
    await createEShopAccountPageObject.goto();
    await createEShopAccountPageObject.clickOnCreateEShopAccount();
    await createEShopAccountPageObject.registrationFormFillUp(firstName,lastName,email,password,password);
    await createEShopAccountPageObject.clickOnCreateEShopAccount();
    await createEShopAccountPageObject.verifyPasswordErrorMessage();
    await createEShopAccountPageObject.clickOnCreateEShopAccount();


});