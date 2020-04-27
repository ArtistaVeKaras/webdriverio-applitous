const internetPage = require('../pages/internet.page')
describe('WebdriverIO API Actions', function () {
    it('should hover on the figure', () => {
        browser.url(`${browser.options.baseUrl}/hovers`)
        internetPage.hoverOnFigure(3)
        assert.equal("name: user1\nView profile", internetPage.getFigureDetails(3))
        browser.pause(3000)
    })

    it('should send keyboard value', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickOnTarget()
        internetPage.sendKeysToTarget('Backspace')
        assert.equal("You entered: BACK_SPACE",internetPage.getResultText())
    })

    it('should send keyboard value Tab', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickOnTarget()
        internetPage.sendKeysToTarget('Tab')
        assert.equal("You entered: Tab",internetPage.getResultText())
    })

    it('should send keyboard value Shift', () => {
        browser.url(`${browser.options.baseUrl}/key_presses`)
        internetPage.clickOnTarget()
        internetPage.sendKeysToTarget('Shift')
        assert.equal("You entered: SHIFT",internetPage.getResultText())
    })
})