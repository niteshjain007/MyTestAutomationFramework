import {test} from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";
import { encryptEnvFIle } from "../utils/EncryptENVFile";
import logger from "../utils/LoggerUtil";

test("LoginWithValidCredential",async ({page})=>{

    const loginPageObj = new LoginPage(page);

    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName("testology.qa.learning@gmail.com");
    await loginPageObj.fillPassword("Testology@123");

   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();
});

