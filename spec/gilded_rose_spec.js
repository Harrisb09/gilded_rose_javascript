const { ShopItem } = require("../src/gilded_rose");
const { createItem } = require("../src/utility");
let gildedRose, items;
describe("Gilded Rose", () => {
  test("Test Sulfuras, Hand of Ragnaros quality and sell in date after 1 updates", () => {
    gildedRose = new ShopItem([
      createItem("Sulfuras, Hand of Ragnaros", 3, 15),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(16);
    expect(items[0].sellIn).toBe(3);
  });
  test("Test Sulfuras, Hand of Ragnaros corner case", () => {
    gildedRose = new ShopItem([
      createItem("Sulfuras, Hand of Ragnaros", 5, 50),
    ]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(5);
  });
  test("Test Aged Brie with negative sellIn value", () => {
    gildedRose = new ShopItem([createItem("Aged Brie", -3, 10)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(16);
    expect(items[0].sellIn).toBe(-6);
  });
  test("Test Backstage passes to a TAFKAL80ETC concert with negative sellIn value", () => {
    gildedRose = new ShopItem([
      createItem("Backstage passes to a TAFKAL80ETC concert", 0, 50),
    ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-3);
  });
  test("Test Backstage passes to a TAFKAL80ETC concert with smaller then 6 sellIn value", () => {
    gildedRose = new ShopItem([
      createItem("Backstage passes to a TAFKAL80ETC concert", 5, 10),
    ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
    expect(items[0].sellIn).toBe(2);
  });
  test("Test Backstage passes to a TAFKAL80ETC concert with smaller then 11 sellIn value", () => {
    gildedRose = new ShopItem([
      createItem("Backstage passes to a TAFKAL80ETC concert", 10, 10),
    ]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(16);
    expect(items[0].sellIn).toBe(7);
  });
  test("Test Backstage passes to a TAFKAL80ETC concert with sellIn value going from 10 to 0", () => {
    gildedRose = new ShopItem([
      createItem("Backstage passes to a TAFKAL80ETC concert", 10, 10),
    ]);
    for (let i = 0; i < 9; i++) {
      gildedRose.updateQuality();
    }
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(36);
    expect(items[0].sellIn).toBe(0);
  });
});
