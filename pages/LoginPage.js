const { expect} = require('@playwright/test');

exports.LoginPageObject = class LoginPageObject {

  
  constructor(page) {
    this.page = page;
    this.textUserName =  page.locator('#user-name');
    this.textPassword = page.locator('#password');
    this.btnLogin  = page.locator("#login-button");
    this.errorMessage=page.locator("[data-test='error']")
};
  async goto() {
    await this.page.goto('http://34.45.142.80:3000/');
  }

  async usernameField(userName){

    await this.textUserName.fill(userName);
  }
  
  async passwordField(){

    await this.textPassword.fill("secret_sauce")
  }

async clickLoginButton(){

    await this.btnLogin.click();
}

async errorMessageVerification(){

  await expect(this.errorMessage).toBeVisible();
}


};