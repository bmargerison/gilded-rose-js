const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("decreases quality by 1", function() {
    const shop = new Shop([new Item("item", 20, 1)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("decreases quality by 2 if sell by date has passed", function() {
    const shop = new Shop([new Item("item", 0, 2)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("the quality of an item cannot be negative", function() {
    const shop = new Shop([new Item("item", 20, 0)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie increases in quality", function() {
    const shop = new Shop([new Item("Aged Brie", 20, 0)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(1);
  });
});

