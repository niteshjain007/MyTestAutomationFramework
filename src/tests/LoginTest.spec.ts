import {test} from "@playwright/test";

import LoginPage from "../pages/LoginPage";

test.skip("LoginWithValidCredential",async ({page})=>{

    const loginPageObj = new LoginPage(page);

    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName("testology.qa.learning@gmail.com");
    await loginPageObj.fillPassword("Testology@123");

   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();
});


test("LoginWithEnvValidCredential",async ({page})=>{

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