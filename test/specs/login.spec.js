const LoginPage = require('../pageObjects/loginPage')

describe('Login', () => {
    it('should login with valid credentials', async () => {
        const loginPage = new LoginPage()

        await browser.url('https://kasirdemo.belajarqa.com')
        await loginPage.usernameInput().setValue('laundrijandi')
        await loginPage.passwordInput().setValue('1122')
        await loginPage.loginButton().click()

        await expect(browser).toHaveUrlContaining('/dashboard')
    })
})
