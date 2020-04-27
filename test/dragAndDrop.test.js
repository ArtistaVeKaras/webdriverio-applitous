const internetPage = require('../pages/internet.page')
describe('Drag and Drop', function(){
    it('should drag column A to column B', () => {
        browser.url(`${browser.options.baseUrl}/drag_and_drop`)
        internetPage.dragColumnAToColumnB()
        assert.equal("A", internetPage.columnBHeader.getText())
    })

    /*
    * this function will  not work because the elements are not specified
    * in the internet page js class*/
    it('Should drag and drop', () =>{
        browser.url(`https://crossbrowsertesting.github.io/drag-and-drop.html`)
        internetPage.dragDraggableToDraggable()
        assert.equal('Dropped!', internetPage.droppableparagrapth.getText())
    })
})