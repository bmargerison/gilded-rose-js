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

  it("the quality of an item cannot go above 50", function() {
    const shop = new Shop([new Item("Aged Brie", 20, 50)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("the quality of Sulfuras does not change", function() {
    const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 20, 2)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("Backstage passes increases in quality", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 1)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("Backstage passes increases by 2 with 10 days left", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 1)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it("Backstage passes increases by 3 with 5 days left", function() {
    const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(4);
  });
});

