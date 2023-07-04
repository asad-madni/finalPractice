function savePhone(db, data) {
  const phoneCollection = db.collection("phones");
  phoneCollection.insertOne(data);
}

async function getPhone(
  db,
  brand,
  ram,
  color,
  priceFrom,
  priceTo,
  battery,
  sF,
  sT
)

{
  let query = {
    
  };

if(brand)
{
query.brand = brand;
}

  if (priceFrom && priceTo) {
    query.variant = {};
    query.variant.price = {};
    query.variant.price.$and = [{$gte : priceFrom},{$lte : priceTo}];
  console.log(JSON.stringify(query))
}
//   else if (priceTo) {
//       console.log("priceTo is showing")

//     query["variant.price"] = {$lte : priceTo};
//  }
  
//   else if (priceFrom) {
//     console.log("priceTo is showing")

//     query["variant.price"] = {$gte : priceTo};
//   }
// if(sF)
// {
//     query["variant.storage"] = {$gte:sF}
// }
// if(sT)
// {
//     query["variant.storage"] = {$lte:sT}
// }


  const result =await db.collection("phones").find(query);
  const phones = result.toArray();
  return phones;
}

module.exports = {
  savePhone,
  getPhone,
};
