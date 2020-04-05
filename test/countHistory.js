describe('multiple scenarios', function(){
    var firstNo = element(by.model('first'));
    var secondNo = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var total = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));

// beforeEach 
beforeEach(function(){
    browser.get('https://juliemr.github.io/protractor-demo/');
});

function add(a,b){
    firstNo.sendKeys(a);
    secondNo.sendKeys(b);
    goButton.click();
}

it ('check history', function(){
    add(3,4);
    add(5,6);
    add(9,7);
    expect(history.count()).toEqual(3);

    add(9,3);
    add(5,66);
    expect(history.count()).toEqual(5);

})


});