const RegisterPage = require('../pageObjects/registerPage')

describe('Registrasi', () => {
    it('should register with valid data', async () => {
        const registerPage = new RegisterPage()

        await browser.url('https://kasirdemo.belajarqa.com/register')
        await registerPage.usernameInput().setValue('laundrijandi')
        await registerPage.emailInput().setValue('laundrijandi@example.com')
        await registerPage.passwordInput().setValue('1122')
        await registerPage.confirmPasswordInput().setValue('1122')
        await registerPage.registerButton().click()

        // Assertion: Memastikan muncul pesan sukses registrasi
        await expect(browser).toHaveTextContaining('Registrasi berhasil')

        // Assertion tambahan: Memastikan diarahkan ke halaman login setelah registrasi
        await expect(browser).toHaveUrlContaining('/login')
    })

    it('should show error message for existing username', async () => {
        const registerPage = new RegisterPage()

        await browser.url('https://kasirdemo.belajarqa.com/register')
        await registerPage.usernameInput().setValue('existingUser') // Asumsi username sudah ada
        
        await registerPage.registerButton().click()

        // Memastikan muncul pesan error untuk username yang sudah ada
        await expect(browser).toHaveTextContaining('Username sudah digunakan')
    })
})
