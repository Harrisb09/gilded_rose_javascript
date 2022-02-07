const { Item } = require("./ItemLibrary");
const { itemData } = require("./__mockData__");

const createItem = (name, sellIn, quality) => {
  return new Item(name, sellIn, quality);
};
const getItemData = () => {
  const items = [];
  for (let item of itemData) {
    items.push(createItem.apply(null, item));
  }
  return items;
};
module.exports = { createItem, getItemData };
