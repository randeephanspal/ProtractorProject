describe('multiple scenarios', function(){
    var firstNo = element(by.model('first'));
    var secondNo = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var total = element(by.className('ng-binding'));

// beforeEach 
beforeEach(function(){
    browser.get('https://juliemr.github.io/protractor-demo/');
});

it('title', function(){
    expect(browser.getTitle()).toEqual('Super Calculator');
});

it('addition', function(){
    firstNo.sendKeys(7);
    secondNo.sendKeys(8);
    goButton.click();
    expect(total.getText()).toEqual('15')
});

});