train = [
  {
    name: "hamsafar express",
    from: "raipur",
    to: "new delhi",
    date: "today",
  },
  {
    name: "chhattisgarh express",
    from: "raipur",
    to: "new delhi",
    date: "today",
  },
  {
    name: "samparkranti express",
    from: "bilaspur",
    to: "new delhi",
    date: "today",
  },
  {
    name: "Durga jammutawi",
    from: "bilaspur",
    to: "new delhi",
    date: "today",
  },
  {
    name: "hazrat nizamudding express",
    from: "raipur",
    to: "new delhi",
    date: "tomorrow",
  },
  {
    name: "gondwana express",
    from: "raipur",
    to: "new delhi",
    date: "tomorrow",
  },
  {
    name: "bsp superfast express",
    from: "bilaspur",
    to: "new delhi",
    date: "tomorrow",
  },
  {
    name: "special new delhi express",
    from: "bilaspur",
    to: "new delhi",
    date: "tomorrow",
  },
  {
    name: "patna express",
    from: "delhi",
    to: "patna",
    date: "today",
  },
  {
    name: "biharexpress",
    from: "delhi",
    to: "patna",
    date: "today",
  },
  {
    name: "howrah express",
    from: "delhi",
    to: "patna",
    date: "tomorrow",
  },
  {
    name: "Rajendragarh express",
    from: "patna",
    to: "delhi",
    date: "tomorrow",
  },
];
//Q1-Give two parameters from and to both compulsory
//Q2 - if both are given then check for date if date has given then show data
//accordingly otherwise show trains

module.exports = { rail };

function rail(from, to, date) {
  let fromMatch = false;
  let toMatch = false;
  let dateMatch = false;
  let save = [];
  for (i = 0; i < train.length; i++) {
    if (from == train[i].from) {
      fromMatch = true;
      if (to == train[i].to) {
        toMatch = true;
        if (date) {
          if (date == train[i].date) {
            console.log("d")
            dateMatch = true;
            save.push(train[i]);
          }
        } else {
          save.push(train[i]);
        }
      }
    }
  }
  if(!fromMatch)
  return "provide source correctly"
  if(!toMatch)
  return "provide destination correctly"
  if(!toMatch&&!dateMatch)
  return "not available on this day"
  return save;
}
