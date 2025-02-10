import {test} from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtil";
import { encryptEnvFIle } from "../utils/EncryptENVFile";
import logger from "../utils/LoggerUtil";
import mydata from "../data/testdata.json";
import newdata from "../data/Newtestdata.json";
import { convertCsvFileToJsonFile } from "../utils/CsvtoJsonUtil";


test.skip("LoginWithValidCredential",async ({page})=>{

    const loginPageObj = new LoginPage(page);

    await loginPageObj.gotoLoginPage();
    await loginPageObj.fillUserName(mydata.emailid);
    await loginPageObj.fillPassword(mydata.password);

   const homePageObj= await loginPageObj.clickOnLoginBtn();
   await homePageObj.clickOnPopupModalCloseButton();
    await homePageObj.verifyLogoIsPresent();
});

test("get data from csv",async ({page})=>{

    convertCsvFileToJsonFile("testdata.csv","Newtestdata.json");
    

});

