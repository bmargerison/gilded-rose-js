const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("increases quality by 1", function() {
    const shop = new Shop([new Item("item", 20, 1)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

