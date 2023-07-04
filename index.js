const express = require("express"); // Import library
const { savePhone, getPhone } = require("./mondob1");

const app = express(); // Create instance
const port = 5000; // Define port
app.use(express.json()); // to parse json input from body

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.get("/", function (req, res) {
  res.json({
    message: Hello,
  });
});

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
let db;
console.log("Connecting to mongodb");
const client = new MongoClient(url);
// Database Name
const dbName = "p";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  db = client.db("p");
}
main();

const { add } = require("./sum");

app.post("/sum", function (req, res) {
  let input = req.body;
  console.log(input);
  let first = input.first;
  let second = input.second;
  let output = add(first, second);
  res.json(output);
});

const { sub } = require("./submission");

app.post("/subtract", function (req, res) {
  let input = req.body;
  let first = input.first;
  let second = input.second;
  let output = sub(first, second);
  res.json(output);
});

const { divide } = require("./division");

app.post("/division", function (req, res) {
  let input = req.body;
  let first = input.first;
  let second = input.second;
  let output = divide(first, second);
  res.json(output);
});

const { multiply } = require("./multiplication");

app.post("/multiplication", function (req, res) {
  let input = req.body;
  let first = input.first;
  let second = input.second;
  let output = multiply(first, second);
  res.json(output);
});

const { searchingPhone } = require("./phone");

app.post("/mobile", function (req, res) {
  let input = req.body;
  let brand = input.brand;
  let storage = input.storage;
  let price = input.price;
  let output = searchingPhone(brand, storage, price);
  res.json(output);
});

const { shoe } = require("./shoes");
app.post("/shoes", function (req, res) {
  let input = req.body;
  let brand = input.brand;
  let price = input.price;
  let type = input.type;
  let output = shoe(brand, price, type);
  res.json(output);
});
const { raashan } = require("./goods");
app.post("/goods", function (req, res) {
  let input = req.body;
  let product = input.product;
  let stock = input.stock;
  let output = raashan(product, stock);
  res.json(output);
});

const { movie } = require("./film");

app.post("/movie", function (req, res) {
  let input = req.body;
  let film = input.film;
  let day = input.day;
  let time = input.time;
  let output = movie(film, day, time);
  res.json(output);
});

const { job } = require("./naukri");

app.post("/naukri", function (req, res) {
  let input = req.body;
  let gender = input.gender;
  let skill = input.skill;
  let exp = input.exp;
  let city = input.city;
  let output = job(gender, skill, exp, city);
  res.json(output);
});

const { Roadways } = require("./bus");

app.post("/bus", function (req, res) {
  let input = req.body;
  let name = input.name;
  let type = input.type;
  let seater = input.seater;
  let output = Roadways(name, type, seater);
  res.json(output);
});

const { rail } = require("./train");

app.post("/train", function (req, res) {
  let input = req.body;
  let from = input.from;
  let to = input.to;
  let date = input.date;
  let output = rail(from, to, date);
  res.json(output);
});

const { easyNikah } = require("./nikah");

app.post("/nikah", function (req, res) {
  let input = req.body;
  let gender = input.gender;
  let city = input.city;
  let age = input.age;
  let graduation = input.graduation;
  let output = easyNikah(gender, city, age, graduation);
  res.json(output);
});

const { payment } = require("./pay");
app.post("/payment", function (req, res) {
  let input = req.body;
  let mobile = input.mobile;
  let toMobile = input.toMobile;
  let amount = input.amount;
  let output = payment(mobile, toMobile, amount);
  res.json(output);
});
// DATE  - 3/4/2023
const { car } = require("./cardekho");

app.post("/car", function (req, res) {
  let input = req.body;
  let city = input.city;
  let price = input.price;
  let output = car(price, city);
  res.json(output);
});

const { cloud } = require("./StorageCloud");

app.post("/cloud", function (req, res) {
  let input = req.body;
  let free = input.free;
  let capacity = input.capacity;
  let output = cloud(free, capacity);
  res.json(output);
});

const { ship } = require("./parcel");

app.post("/courrier", function (req, res) {
  let input = req.body;
  let to = input.to;
  let kg = input.kg;
  let output = ship(to, kg);
  res.json(output);
});
// 04-04-2023
const { fl } = require("./fly");
app.post("/fly", function (req, res) {
  let input = req.body;
  let to = input.to;
  let type = input.type;
  let name = input.name;
  let seat = input.seat;
  let output = fl(to, type, name, seat);
  res.json(output);
});

//06-04-2023

const { fr } = require("./fruit");

app.post("/fruit", function (req, res) {
  let input = req.body;
  let name = input.name;
  let stock = input.stock;
  let output = fr(name, stock);
  res.json(output);
});

const { news } = require("./khabarNews");
const req = require("express/lib/request");

app.post("/news", function (req, res) {
  let input = req.body;
  let name = input.name;
  let city = input.city;
  let output = news(name, city);
  res.json(output);
});

const { train } = require("./rail");

app.post("/rail", function (req, res) {
  let input = req.body;
  let number = input.number;
  let type = input.type;
  let output = train(number, type);
  res.json(output);
});

const { mail } = require("./gmail");

app.post("/mail", function (req, res) {
  let input = req.body;
  let username = input.username;
  let password = input.password;
  let output = mail(username, password);
  res.json(output);
});

app.post("/phonesP", (req, res) => {
  savePhone(db, req.body);
  res.json({
    status: 200,
    message: "Phone saved successfully",
  });
});

app.get("/phones", async (req, res) => {
  let { brand, color, ram, priceFrom, priceTo, battery, sF, sT } = req.query;
 priceFrom= parseInt(priceFrom)
 priceTo = parseInt(priceTo)
//  console.log(priceTo)
  const matchingPhones = await getPhone(
    db,
    brand,
    ram,
    color,
    priceFrom,
    priceTo,
    battery,
    sF,
    sT
  );
  res.json({
    status: 200,
    message: "Phone returned successfully",
    data: matchingPhones,
  });
});

const { saveCategory, getCategory } = require("./category");
app.post("/category", (req, res) => {
  saveCategory(db, req.body);
  res.json({
    status: 200,
    message: "Cateogries returned successfully",
  });
});








app.get("/categories", async (req, res) => {
  const matchedCatogries = await getCategory(db);
  res.json({
    status: 200,
    message: "Phone returned successfully",
    data: matchedCatogries,
  });
});































// start app
app.listen(port, function (err) {
  if (err) {
    console.log("Failed to listen on port ", port);
  } else console.log(`app running at: http://localhost:${port}/`);
});
