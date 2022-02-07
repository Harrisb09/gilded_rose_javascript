const { ShopItem } = require("../src/gilded_rose");
const { getItemData } = require("../src/utility");

const iterations = 2;
const gildedRose = new ShopItem(getItemData());

for (let i = 0; i < iterations; i++) {
  gildedRose.updateQuality();
}
