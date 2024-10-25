const LoginPage =  require("../po/pages/login.page.js");
const DataProvider = require("../dataProvider.js");

const loginPage = new LoginPage();
const dataProvider = new DataProvider("Vadym","Password");

describe("Unit case 1", () => {
    before(async () => {
        await loginPage.open();
    });
    it("Verifying if the 'username' has been provided", async () => {
        
        await loginPage.formLogin.userField.setValue(dataProvider.username);
        await loginPage.formLogin.passwordField.setValue(dataProvider.password);
        
        
        await loginPage.formLogin.userField.setValue("");
        await loginPage.formLogin.passwordField.clearValue();
        
        await loginPage.formLogin.userField.click();
        await loginPage.pressSpace();
        await loginPage.pressBackSpace();

        await loginPage.formLogin.loginBtn.click();

        await expect(loginPage).toHaveTitle("Swag Labs", {message:"Expected that title don't change but it did"});
        await expect(loginPage.formLogin.loginBtn).toBeClickable({
            message:'Expected the login button to be clickable, but it was not.'
        });
        await expect(loginPage.formLogin.errorMessage).toHaveText("Epic sadface: Username is required", {
            message: 'Expected the error message to be "Epic sadface: Username is required", but the text was different.'
        });
        // await browser.pause();
    });
});
//allure 