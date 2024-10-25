const HeaderInventory = require("./../components/inventory/headerInventory.component.js")
const BasePage = require("./base.page");

class InventoryPage extends BasePage {
    constructor() {
        super("/inventory.html");
        this.headerInventory = new HeaderInventory();
    }
}
module.exports = InventoryPage;