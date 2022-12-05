import products from "./data.js";

function getSaleItems(data) {
  return data
    .filter((product) => product.type === "sweet")
    .map((product) => ({ item: product.item, price: product.price }));
}

console.log(getSaleItems(products));
