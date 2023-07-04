//TASK 1 - Take input city and price and show data
let data = require("./carData.json");
module.exports = { car };
function car(price, city) {
  let save = [];
  let priceMatch = false;
  let cityMatch = false;
  for (i = 0; i < data.length; i++) {
    if (price >= data[i].price) {
      priceMatch = true;

      for (j = 0; j < data[i].city.length; j++) {
        if (city == data[i].city[j]) {
            cityMatch = true;
            save.push(data[i].price)
            save.push(data[i].cars)
                      
        }
      }
    }
  }
  if(!priceMatch)
  return "No Cars available in this range"
  if(!cityMatch)
  return"No Cars in this city"
  return save
}
