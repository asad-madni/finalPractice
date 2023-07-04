let data = require("./khabar.json");
module.exports = { news };
// task 1 - Find newspaper using name
// task 2 - Find newspaper using city
// task 3 - select using rate
// 
function news(name, city) {
  let nameMatch = false;
  let cityMatch = false;
  let save = [];
  let lang = false;
  let rate = false;
  for (i = 0; i < data.length; i++) {
    if (name == data[i].name) {
      nameMatch = true;
      for (j = 0; j < data[i].city.length; j++) {
        let ci = data[i].city[j];
        if (city == ci) {
          cityMatch = true;
          lang = data[i].language;
          rate = data[i].rate;
          save.push(ci);
        }
      }
    }
  }
  if (!nameMatch) return "Newspaper name is not exist";
  if (nameMatch && !cityMatch)
    return "Provided newspaper is not available in this city";
  return {
    Price: rate,
    Language: lang,
  };
}
