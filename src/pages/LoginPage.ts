import {Page} from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage {

    private readonly loginLink = "//li//a[text()='Login']";
    private readonly usernameTxtBx = "input[id='login_email']";
    private readonly passwordTxtBx =  "input[id='login_password']";
    private readonly loginBtn = "button[type='submit'][class *= 'btn-login']";

    constructor(private page:Page){

    }

    async gotoLoginPage(){
        await this.page.goto("/");
        await this.page.locator(this.loginLink).click();
        logger.info("navigate to login page");
    }

    
    async fillUserName(userName : string)
    {
        await this.page.locator(this.usernameTxtBx).fill(userName);
        logger.info("username filled");
    }

    async fillPassword(password : string)
    {
        await this.page.locator(this.passwordTxtBx).fill(password);
    }

    async clickOnLoginBtn(){
        await this.page.locator(this.loginBtn)
               .click()
               .catch((error)=>{
            console.log(`error on clicking login button : ${error}`);
            throw error;
               });

               const homePage = new HomePage(this.page);
               return homePage;
    }



}