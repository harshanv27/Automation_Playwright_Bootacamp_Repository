const { expect} = require('@playwright/test');

exports.CreateEShopAccountPageObject = class CreateEShopAccountPageObject {
    constructor(page) {
      this.page=page;
      this.createYourEShopAccountPage=page.locator("//span[normalize-space()='Create Your E-Shop Account']");
      this.firstName=page.locator("#firstName");
      this.lastName=page.locator("#lastName");
      this.email=page.locator("#email");
      //this.password=page.locator("#password")
      this.confirmPassword=page.locator("#confirmpassword");
      this.passwordErrorMessage=page.locator("//span[normalize-space()='This Password and Confirm Password donot match']");
      this.email=page.locator("//input[@id='email']")
      this.password=page.locator("//input[@id='password']");
      this.login = page.locator("//span[normalize-space()='Log In']");



  };

  async goto(){

    await this.page.goto("http://34.45.142.80:3000/cts-shop/login");
  }

  async clickOnCreateEShopAccount(){

    await this.createYourEShopAccountPage.click();

  }
  async registrationFormFillUp(firstName,lastName,email,password,confirmationPassword){

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmationPassword);
    await this.page.pause();
    
  }

  async verifyPasswordErrorMessage(){

     const passwordErrorMessage= await this.passwordErrorMessage.innertext();
     console.log(passwordErrorMessage);
     await expect(passwordErrorMessage).toBeVisible();

  }

  async login(email,password){

    await this.email.fill(email);
    await this.password.fill(testdata.password);
    await this.login.click();
  }
 
  };