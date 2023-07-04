let data = require("./trainData.json");
module.exports = { train };
// make total three function
// FUNCTION 1 - take input train number,
//- take input type
// function 2 - take input seats and book ticket


function train(number, type) {
  let numMatch = false;
  let typeMatch = false;
  let save = [];

  for (i = 0; i < data.length; i++) {
    if (number == data[i].trainNo) {
      numMatch = true;
      if (type) {
        for (j = 0; j < data[i].availability.length; j++) {
          let avl = data[i].availability[j].classname;
          if (type == avl) {
            typeMatch = true;
            save.push(data[i].availability[j]);
            // console.log(availability[j])
          }
        }
      } else {
        save.push(data[i]);
      }
    }
  }




  if (!numMatch) return "train number doesn't exist";
  if (type && !typeMatch) return "not match";
  return save;
}