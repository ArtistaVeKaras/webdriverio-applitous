const internetPage = require('../pages/internet.page')

describe('Dropdown menu',function () {
    it('should select option 1', () => {
    browser.url(`${browser.options.baseUrl}/dropdown`)
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOption1()
        assert.equal(true, internetPage.dropdownOptions1.isSelected())

    })
})
