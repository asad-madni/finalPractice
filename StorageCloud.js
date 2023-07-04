let data = require("./storage.json");
function cloud(free, capacity) {
  let fMatch = false;
  let cMatch = false;
  let save = [];
  for (i = 0; i < data.length; i++) {
    if (free >= data[i].free) {
      fMatch = true;
      if (capacity >= data[i].capacity) {
        cMatch = true;
        save.push(data[i]);
      }
    }
  }
  if (!fMatch) return "Not free at this much";
  if (!cMatch) return "No capacity of this much available";
  return save;
}

module.exports = { cloud };
