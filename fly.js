let data = require("./flight.json");
module.exports = { fl };
function fl(to, type, name, seat) {
  toMatch = false;
  typeMatch = false;
  nameMatch = false;
  seatMatch = false;
  save = [];
  for (let i = 0; i < data.length; i++) {
    if (to == data[i].to) {
      toMatch = true;
      if (type == data[i].type) {
        typeMatch = true;
//  console.log(data[i].Reservation.name)
        if (name) {
          for (j = 0; j < data[i].Reservation.length; j++) {
            let res = data[i].Reservation[j].name;
            if (name == res) {
              nameMatch = true;
              if(seat>=res.seat)
              {
                seatMatch = true
                save.push(Reservation[j])
              }
            }
          }
        }
        save.push(data[i]);
      }
    }
  }
  if (!toMatch) return "No flights between this city";
  if (!typeMatch) return "No flights available in this type";
  if(name&&!nameMatch)
  return "NO flights are for this name"
  if(nameMatch&&!seatMatch)
  return "Seat is not available"
  return save;
}
