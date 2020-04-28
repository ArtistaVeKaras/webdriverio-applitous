const internetPage = require('../../pages/internet.page')
const logindata = require('../data/logindata.js')

describe('Test element actions', function () {
    it('should create element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest')
    })
    it('Should get text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected().equals(true))
    })
    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox()
        expect(internetPage.checkboxes(1).isSelected().equals(false))
    })
    it('should enter username', () => {
        browser.url(`${browser.options.baseUrl}/login`)
        internetPage.enterUsername(logindata.username)
        assert.equal(logindata.username, internetPage.username.getValue())
    })

    it('should enter password', () => {
        browser.url('${browser.options.baseUrl}/login')
        internetPage.enterPassword(logindata.password)
        assert.equal(logindata.password, internetPage.password.getValue())
    })
    it('should clear value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })
})