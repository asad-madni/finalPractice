let goods = [
  {
    name: "sugar",
    stock: 20,
    price: 45,
  },
  {
    name: "salt",
    stock: 10,
    price: 10,
  },
  {
    name: "oil",
    stock: 30,
    price: 85,
  },
  {
    name: "shampoo",
    stock: 40,
    price: 76,
  },
  {
    name: "chips",
    stock: 50,
    price: 15,
  },
  {
    name: "dairy milk",
    stock: 80,
    price: 55,
  },
  {
    name: "rooh afza",
    stock: 80,
    price: 75,
  },
];

// User will give product name and stock
// If stock is not available show error
// return object with price and their bill

function raashan(product, stock) {
  nameMatch = false;
  stockMatch = false;
  let save = [];
  let calculate = false;

  for (i = 0; i < goods.length; i++) {
    if (product == goods[i].name) {
      nameMatch = true;
      if (stock <= goods[i].stock) {
        stockMatch = true;
        calculate = goods[i].price * stock;
        save.push({
          "Cost of Product": goods[i].price,
          "Total cost": calculate,
        });
      }
    }
  }

  if (!nameMatch) return "This product is not available";
  if (!stockMatch) return "Out of Stock";
  return save;
}

module.exports = { raashan };
