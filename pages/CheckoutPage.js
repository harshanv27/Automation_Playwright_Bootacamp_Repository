const { expect} = require('@playwright/test');

exports.CheckoutPageObject = class CheckoutPageObject {
    constructor(page) {
      this.page = page;
      this.CheckOutCart=page.getByRole('link', { name: '1' });
      this.checkOut =page.getByRole('link',{ name: 'CHECKOUT'});
      this.firstName= page.locator('[data-test="firstName"]')
      this.lastName= page.locator('[data-test="lastName"]');
      this.postalCode=page.locator('[data-test="postalCode"]');
      this.continue= page.getByRole('button', { name: 'CONTINUE' });
      this.htmlPage=page.locator('html');
      this.finish=page.getByRole('link', { name: 'FINISH' });
      this.thankYouMessageVerification=page.locator("//h2[normalize-space()='THANK YOU FOR YOUR ORDER']");
      this.openMenu=page.getByRole('button', { name: 'Open Menu' });
      this.logout=page.getByRole('link', { name: 'Logout' }); 
      this.remove = page.locator("//button[normalize-space()='REMOVE']")
      this.product_Total =  page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']/span");
      this.checkOutCart3= page.getByRole('link',{name: '3'});

  };
   
 async clickOnCheckoutCart(){

await this.CheckOutCart.click();

 }

 async clickOncheckOut(){

    await this.checkOut.click();
 }
  
  async checkOutDetails(firstName,lastName,postalCode)
{

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
}  

async clickOnContinueBttn(){
    await this.continue.click();

}

async verifyHtmlPage(){

    await this.htmlPage.click();

}

async clickOnFinishPage(){

    await this.finish.click();
}

async verifyThankYouMessage(){
    await expect(this.thankYouMessageVerification).toBeVisible();
}

async clickOnOpenMenu(){

    await this.openMenu.click();
}

async clickOnLogout(){
    await this.logout.click();
}

async removeFirstProduct(){

    await this.remove.first().click();
}

async VerifyProductTotalThree(){

   const Product_Total_Three= await this.product_Total.innerText();
   console.log(Product_Total_Three);
   expect(Product_Total_Three).toBeTruthy()
}

async clickOnProduct_Total(){

    await this.product_Total.click();
}

async verifyProductTotalTwo(){
    const Poduct_Total_Two=await this.product_Total.innerText()
    console.log(Poduct_Total_Two);
    expect(Poduct_Total_Two).toBeTruthy();
}

async verifyProductTotalZero(){
    const product_Total_zero = await this.product_Total.innerText();
    console.log(product_Total_zero);
    expect(product_Total_zero).toBeTruthy();
}
async clickOncheckOutCart3(){

    await this.checkOutCart3.click();
}
async VerifyProductTotalOne(){

    const Product_Total_One= await this.product_Total.innerText();
    console.log(Product_Total_One);
    expect(Product_Total_One).toBeTruthy()
 }

  };