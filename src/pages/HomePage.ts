import {Page, expect} from "@playwright/test"

export default class HomePage{

    private readonly logoImage ="img[class='app-logo']";
    private readonly popupModalCloseBtn = "button[data-dismiss='modal'][class *= 'btn-modal-close']";
    constructor(private page:Page){

    }

    async verifyLogoIsPresent(){
        await expect(this.page.locator(this.logoImage)).toBeVisible({timeout:10000});
    }

    async clickOnPopupModalCloseButton()
    {
        const isCloseBtnVisible = await this.page.locator(this.popupModalCloseBtn).isVisible();
       
       if(isCloseBtnVisible)
        {
             await this.page.locator(this.popupModalCloseBtn).click();
        }
    }


}