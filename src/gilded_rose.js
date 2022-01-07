class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':
          this.updateAgedBrie(this.items[i])
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePasses(this.items[i])
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          this.updateItem(this.items[i])
      }
    }

    return this.items;
  }

  updateAgedBrie(item) {
    item.sellIn--;
    if (item.quality < 50) {
      item.quality++;
    };
  };

  updateBackstagePasses(item) {
    item.sellIn--;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
    if (item.quality < 50) {
      item.quality++;
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality++;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality++;
          }
        }
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  };

  updateItem(item) {
    item.sellIn--;
    if (item.quality > 0) {
      item.quality--;
      if (item.quality > 0) {
        if (item.sellIn < 0) {
          item.quality--;
        }
      }
    }
  }

}

module.exports = {
  Item,
  Shop
}
