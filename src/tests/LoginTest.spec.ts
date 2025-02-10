import {test} from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";
import { encryptEnvFIle } from "../utils/EncryptENVFile";
import logger from "../utils/LoggerUtil";

test.skip("LoginWithValidCredential",async ({page})=>{

    const loginPageObj = new LoginPage(page);

    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName("testology.qa.learning@gmail.com");
    await loginPageObj.fillPassword("Testology@123");

   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();
});


test.skip("LoginWithEnvValidCredential",async ({page})=>{

    const loginPageObj = new LoginPage(page);

    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName(process.env.userEmail!);
    await loginPageObj.fillPassword(process.env.password!);

   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();

   // console.log(process.env.NODE_ENV)
  //  console.log(process.env.userEmail);
   // console.log(process.env.password);
});



test.skip("LoginWithEncryptedValidCredentialFromEncrptedFile",async ({page})=>{

    const loginPageObj = new LoginPage(page);

    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName(decrypt(process.env.userEmail!));
    await loginPageObj.fillPassword(process.env.password!);

   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();

  /*  const mytext = "JOHN travolta";
    const encyptedText = encrypt(mytext);

    console.log('SALT:',process.env.SALT);
    console.log('encyopted value:',encyptedText)

    const dycryptedText = decrypt(encyptedText);
    console.log('decrypted value:', dycryptedText);*/

});



test("LoginWithEncryptedValidCredential",async ({page})=>{
   
    const loginPageObj = new LoginPage(page);
    logger.info("i am at home page");
    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName(decrypt(process.env.userEmail!));
    await loginPageObj.fillPassword(decrypt(process.env.password!));
    logger.info("userid password provided");
   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();

   /* const mytext = "JOHN travolta";
    const encyptedText = encrypt(mytext);

    console.log('SALT:',process.env.SALT);
    console.log('encyopted value:',encyptedText)

    const dycryptedText = decrypt(encyptedText);
    console.log('decrypted value:', dycryptedText);

    encryptEnvFIle();
*/
});