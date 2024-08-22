import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pages/LoginPage';
import { CheckoutPageObject } from '../pages/CheckoutPage';
import { ProductPageObject} from '../pages/ProductPage';
const tc1Data = require('../test_data/testdata.json');

tc1Data.forEach((testdata) => {
 
  test('test for user - '+testdata.username,
    
   async ({ page,request }) => {

    const loginPageObject = new LoginPageObject(page);
     await loginPageObject.goto();
     await loginPageObject.usernameField(testdata.username)
     await loginPageObject.passwordField(testdata.password);
     await loginPageObject.clickLoginButton();
     const isItemVisible = page.getByText('Sauce Labs BackPack').isVisible();
  });
}); 


  /*test('SC1-Validate locked out error Message',async ({page})=>{

  const loginPageObject = new LoginPageObject(page);
  await loginPageObject.goto();
  await loginPageObject.usernameField("locked_out_user")
  await loginPageObject.passwordField("secret_sauce");
  await loginPageObject.clickLoginButton();
  await loginPageObject.errorMessageVerification();
});

  test("SC2-Validate order confirmation message",async ({page})=>{
  const loginPageObject = new LoginPageObject(page);
  const checkoutPageObject   =new CheckoutPageObject(page);
  const productPageObject = new ProductPageObject(page);
  await loginPageObject.goto();
  await loginPageObject.usernameField("standard_user")
  await loginPageObject.passwordField("secret_sauce");
  await loginPageObject.clickLoginButton();
  await productPageObject.clickOnSauceLabsBoltTshirt();
  await checkoutPageObject.clickOnCheckoutCart();
  await checkoutPageObject.clickOncheckOut();
  await checkoutPageObject.checkOutDetails("hdhdhd","djdn","2929292")
  await checkoutPageObject.clickOnContinueBttn();
// await checkoutPage.verifyHtmlPage();
  await checkoutPageObject.clickOnFinishPage();
  await checkoutPageObject.verifyThankYouMessage();
  await checkoutPageObject.clickOnOpenMenu();
  await checkoutPageObject.clickOnLogout();

});

test("SC3-Remove product from cart and verify message",async ({page})=>{
  const loginPageObject = new LoginPageObject(page);
  const productPageObject = new ProductPageObject(page);
  const checkoutPageObject = new CheckoutPageObject(page);
  await loginPageObject.goto();
  await loginPageObject.usernameField("standard_user")
  await loginPageObject.passwordField("secret_sauce");
  await loginPageObject.clickLoginButton();
  await productPageObject.clickOnSauceLabsBoltTshirt();
 // await productPageObject.totalProductCart();
  await checkoutPageObject.clickOnCheckoutCart();
  await checkoutPageObject.VerifyProductTotalOne();
  await checkoutPageObject.removeFirstProduct() ;

});

test("SC4-Multiple product Add to cart",async({page})=>{
  const loginPageObject = new LoginPageObject(page);
  const productPageObject = new ProductPageObject(page);
  const checkoutPageObject = new CheckoutPageObject(page);
  await loginPageObject.goto();
  await loginPageObject.usernameField("standard_user")
  await loginPageObject.passwordField();
  await loginPageObject.clickLoginButton();
  await productPageObject.clickOnSauceLabsBoltTshirt();
  await productPageObject.clickOnSauceLabsBackPackProduct();
  await productPageObject.clickOnSauceLabsBikeLight();
  await checkoutPageObject.clickOncheckOutCart3();
  await checkoutPageObject.VerifyProductTotalThree();
  await productPageObject.clickOnremovesauceLabsBoltTshirt();
  await checkoutPageObject.verifyProductTotalTwo();

});
*/
