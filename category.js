// 1. Prepare data of Category schema of 10 data
// name, order, icon, isActive
// 2. Create endpoint
// GET /categories -> Return all categories
// POST /categories -> Create one category
// 3. Collection name - category
function saveCategory(p, data) {
    const categoryCollection = p.collection("category");
    categoryCollection.insertOne(data);
  }

async function getCategory(db)
{
    const result =await db.collection("category").find();
    const cat = result.toArray();
    return cat;
}


module.exports={saveCategory,getCategory}