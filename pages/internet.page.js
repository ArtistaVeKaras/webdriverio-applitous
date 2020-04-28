class Internet {
   get pageHeader() { return $('h1.heading') }
   get subHeading() { return $('h2') }
   get h3Header() { return $('h3') }
   get pageFooter() { return $('#page-footer') }
   get parent() { return $('ul') }
   get childElements() { return this.parent.$$('li') }
   spcecificChildElement(index) { return this.parent.$('li:nth-child$(index)')}

   get firstLink() {return $(`ul li:nth-child(1) a`) }
   link(index) { return $(`ul li:nth-child(${index}) a`) }

   checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`) }

   get username() { return $('#username') }
   get password() { return $('#password') }

   figures(index) { return $(`.example .figure:nth-child(${index}) img`) }
   figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption`) }

   get target() { return $(`#target`) }
   get result() { return $(`#result`) }

   get hereLink() { return $(`.example a`) }

   get iframeBody() { return $(`#tinymce`) }
   get iframe() { return $(`#mceu_27 #mce_0_ifr`)}

   get columnA() { return $('#column-a')}
   get columnB() { return $('#column-b')}

   get columnAHeader() { return $('#column-a header') }
   get columnBHeader() { return $('#column-b header') }

   get graggable() { return $('#draggable') }
   get droppable() { return $('#droppable') }

   get dropdownMenu() { return $('#dropdown') }
   get dropdownOptions1() {return $('#dropdown option:nth-child(2)') }

   javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`) }

   get enableButton() { return $('#input-example button') }
   get inputEnabledField() { return $('#input-example input') }

   get exampleButton() { return $('.example button') }
   deleteButton(index) { return $(`#elements button:nth-child(${index})`) }

   get pageButton() { return $('#checkbox-example button')}

   /*
   * click page button
   * */
   clickPageButton(){
      this.pageButton.waitForDisplayed()
      this.pageButton.click()
   }
   /*
   * click the example button
   * */
   clickExampleButton(){
      this.exampleButton.waitForDisplayed()
      this.exampleButton.click()
   }
   /*
   * click the deleteButton
   * */
   clickDeleteButton(){
      this.deleteButton().waitForDisplayed()
      this.deleteButton().click()
   }

   /*
   CLick the enable/disabled button
   * */
   clickEnabledButton(){
      this.enableButton.waitForDisplayed()
      this.enableButton.click()
   }

   /*
   * click the specific javascript alert button
   * @param {Number} index of the element
   * */
   clickJavascriptAlertButton(index){
      this.javascriptAlertButton(index).waitForDisplayed()
      this.javascriptAlertButton(index).click()
   }
   /*
   * click on the dropdown menu
   * */
   clickDropdownMenu(){
      this.dropdownMenu.waitForDisplayed()
      this.dropdownMenu.click()
   }
   /*
   * click dropdown and select option #1
   * */
   clickDropdownMenuOption1(){
      this.dropdownOptions.waitForDisplayed()
      this.dropdownOptions.click()
   }
   /*
   Drag and drop columnA to columnB
   remember that drag and drop doesn't always work!!
   * */
   dragColumnAToColumnB(){
      this.columnA.waitForDisplayed()
      this.columnA.dragAndDrop(this.columnB)
   }

   /*
   * enter text in the iframe
   * @param {String} text the text to be entered
   * */
   sendTextToBody(text){
      this.iframeBody.waitForDisplayed()
      this.iframeBody.clearValue()
      this.iframeBody.click()
      this.iframeBody.keys(text)
   }
   /*
   *Click the "hereLink"
   * */
   clickHereLink() {
      this.hereLink.waitForDisplayed()
      this.hereLink.click()
   }

   /*
   * scrolls to the page footer
   * */
   scrollToPageFooter(){
      this.pageFooter.moveTo()
   }

   /*
   Clicks on the target
   * */
   clickOnTarget(){
      this.target.waitForDisplayed()
      this.target.click()
   }
   /*
   *Sends keyboard keys to Target
   * @param {String} text the keyboard text to enter
   * */
   sendKeysToTarget(text){
      this.target.waitForDisplayed()
      this.target.keys(text)
   }
/*
* return the text of the return element
* */
   getResultText(){
      this.result.waitForDisplayed()
      return this.result.getText()
   }
   /*
   * Hoover over the specific image
   * @param {Number} index the specific index of the image
   * */
   hoverOnFigure(index){
      this.figures(index).waitForDisplayed()
      this.figures(index).moveTo(1,1)
   }
   /*
   * Returns the text of the figure details
   * @pram {Number} index the index of the element
   * */
   getFigureDetails(index){
      this.figureDetails(index).waitForDisplayed()
      return this.figureDetails(index).getText()
   }
   /*
   Enter the username into the field
   * @param {String} text username to be entered
   * */
   enterUsername(text){
      this.username.waitForDisplayed()
      this.username.setValue(text)
   }
   /*
   Enter password into the field
   * @param {String} text password to be entered
   * */
   enterPassword(text){
      this.password.waitForDisplayed()
      this.password.setValue(text)
   }
   /*
   clicks on link based in the index provided
   * @param {number} index the index of the element
   * */
   clickLink(index) {
      this.link(index).waitForDisplayed()
      this.link(index).click()
   }

   clickCheckbox(index){
      this.checkboxes(index).waitForDisplayed()
      this.checkboxes(index).click()
   }

   getLiText() {
      this.childElements.filter((element) => {
         console.log(element.getText())
      })
   }
   getSpecificElementText(index){
      this.spcecificChildElement(index).waitForDisplayed()
      return this.spcecificChildElement(index).getText()
   }

   clickOnLink() {
      if (this.firstLink.isDisplayed() === true) {
         this.firstLink.click()
      }
      this.h3Header.waitForDisplayed()
   }

}
module.exports = new Internet()