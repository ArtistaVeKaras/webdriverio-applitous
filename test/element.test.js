const internetPage = require("../pages/internet.page")
describe('Interacting with elements', function () {
    it("Get text for element",() => {
        browser.url('/')
        let text1 = $("h2").getText();
        let text = $(".heading").getText()
        console.log(text,text1)
        internetPage.getLiText()
    })
    it("Is footer Displayed",() => {
        console.log(internetPage.pageFooter.isDisplayed())
    })
    it("Does the header exist?", () => {
     console.log(internetPage.pageHeader.isExisting())
    })
    it("Is Header in viewport",() => {
      console.log(internetPage.pageHeader.isDisplayedInViewport())
    })
    it("Is subheader enabled", () =>{
        console.log(internetPage.subHeading.isEnabled())
    })
    it("CLick Element", ()=> {
        internetPage.clickOnLink()
    })
})