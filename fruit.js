let data = require("./fruitData.json");
module.exports = { fr };
// take input - name ,stock
// show the json
// show overall estimate and error
function fr(name, stock) {
  nameMatch = false;
  stockMatch = false;
  save = [];
  let pr = false;
  let sum = false;

  for (i = 0; i < data.length; i++) {
    if (name == data[i].name) {
      nameMatch = true;
      pr = data[i].rate;
      if (stock <= data[i].inStock) {
        stockMatch = true;
        sum = pr * stock;
        save.push(sum);
      }
    }
  }
  if (!nameMatch) return "name is not matching";
  if (nameMatch && !stockMatch) return "Out of stock";

  return {
    Fruit: name,
    Quantity: stock,
    "Price of 1 KG": pr,
    "Total cost": sum
  };
}
