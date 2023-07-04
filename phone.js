let phone = [
  {
    brand: "oppo",
    model: "oppo f19",
    ram: 4,
    camera: 108,
    storage: 32,
    price: 5000,
  },
  {
    brand: "realme",
    model: "realme xt",
    ram: 8,
    camera: 108,
    storage: 32,
    price: 10000,
  },
  {
    brand: "realme",
    model: "realme 8 pro",
    ram: 8,
    camera: 48,
    storage: 256,
    price: 15000,
  },
  {
    brand: "oneplus",
    model: "oneplus nord 5G",
    ram: 4,
    camera: 64,
    storage: 64,
    price: 20000,
  },
  {
    brand: "oneplus",
    model: "oneplus 6t",
    ram: 6,
    camera: 150,
    storage: 256,
    price: 25000,
  },
  {
    brand: "samsung",
    model: "A10",
    ram: 6,
    camera: 150,
    storage: 128,
    price: 30000,
  },

  {
    brand: "oppo",
    model: "oppo f20",
    ram: 4,
    camera: 108,
    storage: 128,
    price: 3500,
  },
  {
    brand: "realme",
    model: "realme gt neo",
    ram: 8,
    camera: 108,
    storage: 64,
    price: 40000,
  },
  {
    brand: "realme",
    model: "realme 9 pro",
    ram: 6,
    camera: 48,
    storage: 256,
    price: 45000,
  },
  {
    brand: "oneplus",
    model: "oneplus nord 2 ",
    ram: 4,
    camera: 64,
    storage: 64,
    price: 50000,
  },
  {
    brand: "oneplus",
    model: "oneplus 7t",
    ram: 6,
    camera: 150,
    storage: 256,
    price: 55000,
  },
  {
    brand: "samsung",
    model: "A11",
    ram: 6,
    camera: 150,
    storage: 128,
    price: 60000,
  },
];

//Q1 - Keep Brand name compulsory
//Q2 - If user has given brand then check for storage, if storage has given then check for price
//Q3 - If price and storage has not given then show only brand
//Q4- If price or storage is not matching with DATABASE then show error

function searchingPhone(brand, storage, price) {
  let brandMatch = false;
  let storageMatch = false;
  let priceMatch = false;
  let save = [];
  for (i = 0; i < phone.length; i++) {
    if (brand == phone[i].brand) {
      brandMatch = true;

      if (storage) {
        if (storage == phone[i].storage) {
          console.log("st");
          storageMatch = true;
          if (price) {
            if (price >= phone[i].price) {
              console.log("pr");

              priceMatch = true;
              save.push(phone[i]);
            }
          }
        }
      }
      else{
      save.push(phone[i])
      }
    }

    // else
    // return "brand not match"
  }
  if (!brandMatch) return "brand name not matched";
  if (storage && !storageMatch) return "storage is not matching";
  if (price && !priceMatch) return "price is not matching";
  return save;
}

module.exports = { searchingPhone };
