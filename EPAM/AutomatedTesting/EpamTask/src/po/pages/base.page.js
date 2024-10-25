//The base page that all other components will  extends
class BasePage {
    constructor(path) {
        this.path = path;
    }
    open() {
        const url = `${browser.options.baseUrl}${this.path}`;
        return browser.url(url);
    }

    pressSpace() {
        return browser.keys(' ');
    }

    pressBackSpace() {
        return browser.keys(['Backspace']);
    }

    getTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getUrl();
    }
}
module.exports = BasePage;