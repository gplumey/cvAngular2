export class MyAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-angular2-app h1')).getText();
  }
}
