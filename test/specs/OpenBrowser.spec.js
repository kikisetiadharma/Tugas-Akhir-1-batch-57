const assert = require('assert')

describe('Open Saucedemo', () => {
    it('should open browser dan redirect saucedemo.com', async () => {
        //buka browser
        await browser.url ('https://www.saucedemo.com')

        const currentURL = await browser.getUrl();
        const expectedURL = 'https://www.saucedemo.com';

       
    })
})