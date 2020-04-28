const internetPage = require('../pages/internet.page')

describre('WaitUntil', function () {
    it('should wait until tne button changes', () => {
      browser.url(`${browser.options.baseUrl}/dynamic_controls`)
      internetPage.clickPageButton()
      browser.waitUntil(() =>{
          return internetPage.pageButton.getText() === 'Add'
        }, 6000, 'Expect button text to change')
    })
})