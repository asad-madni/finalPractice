bus = [
  {
    name: "Kanker Roadways",
    type: "ac",
    seater: 50,
  },
  {
    name: "Kanker Roadways",
    type: "ac",
    seater: 55,
  },
  {
    name: "Kanker Roadways",
    type: "ac",
    seater: 60,
  },
  {
    name: "Raipur Roadways",
    type: "non ac",
    seater: 40,
  },
  {
    name: "Raipur Roadways",
    type: "ac",
    seater: 70,
  },
  {
    name: "Raipur Roadways",
    type: "non ac",
    seater: 50,
  },
  {
    name: "Gulzar Roadways",
    type: "non ac",
    seater: 60,
  },
  {
    name: "Gulzar Roadways",
    type: "non ac",
    seater: 70,
  },
  {
    name: "Gulzar Roadways",
    type: "ac",
    seater: 50,
  },
  {
    name: "New Roadways",
    type: "ac",
    seater: 80,
  },
  {
    name: "New Roadways",
    type: "ac",
    seater: 50,
  },
];
module.exports = { Roadways };

function Roadways(name, type, seater) {
  let save = [];
  let nameMatch = false;
  let seaterMatch = false;
  let typeMatch = false;
  for (i = 0; i < bus.length; i++) {
    if (name == bus[i].name) {
      nameMatch = true;
      if (type == bus[i].type) 
      {
        typeMatch = true;
        if (seater >= bus[i].seater) {
          seaterMatch = true;
          save.push(bus[i]);
        }
      }
    }
  }
  if (!nameMatch) return "Name is not matching";
  if (!typeMatch) return "type is not match";
  if (!seaterMatch) return "Seat is not available";
  return save;
}

// Task 1 - Take name  and seater and type together print error accordingly
