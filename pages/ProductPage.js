const { expect } = require('@playwright/test');

exports.ProductPageObject = class ProductPageObject {

  
    constructor(page){
      this.page=page;
       // await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
       //await page.getByRole('button', { name: 'ADD TO CART' }).click();
      this.sauceLabsBackPack= page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Backpack')
      }).getByText('ADD TO CART');
      this.sauceLabsFleeceJacket =page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Fleece Jacket')
      }).getByText('ADD TO CART');
      this.sauceLabsBikeLight = page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Bike Light')
      }).getByText('ADD TO CART');
      this.sauceLabsBoltTshirt= page.locator('.inventory_item').filter({ has: page.getByText('Sauce Labs Bolt T-Shirt')
      }).getByText('ADD TO CART');
     this.removesauceLabsBoltTshirt=page.locator('.cart_item').filter({ has: page.getByText('Sauce Labs Bolt T-Shirt')
     }).getByText('REMOVE');

    };

    async clickOnSauceLabsBackPackProduct(){

      await this.sauceLabsBackPack.click();
    }

    async clickOnSauceLabsFleeceJacket(){

      await this.sauceLabsFleeceJacket.click();
    }

    async clickOnSauceLabsBikeLight(){

      await this.sauceLabsBikeLight.click();
    }

    async clickOnSauceLabsBoltTshirt(){

      await this.sauceLabsBoltTshirt.click();
    }

    async clickOnremovesauceLabsBoltTshirt(){

      await this.removesauceLabsBoltTshirt.click();
    }

    
};