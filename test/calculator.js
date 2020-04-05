describe("Demo calculation test", function(){

    it('addition test', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('5');

        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding','7'));
        // element(by.className('ng-binding')).getText();

        expect(result.getText()).toEqual('7');

        browser.sleep(1000);

    });


    it('title test',function(){
        // browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

});