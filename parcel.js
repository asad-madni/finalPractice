let data = require("./courier.json");
module.exports = { ship };

function ship(to, kg) {
  let toMatch = false;
  let kgMatch = false;
  let save = [];
  let calculate = false;
  let pr = false;
  for (i = 0; i < data.length; i++) {
    if (to == data[i].to) {
      pr = data[i].rate;

      toMatch = true;
      calculate = kg * pr;
      save.push(calculate);
    }
  }

  if (!toMatch) return "location not foudn";
  return {
    "to loaction": to,
    "cost of 1 kg": pr,
    "total cost": calculate,
  };
}
