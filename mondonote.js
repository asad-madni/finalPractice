    
// 1. Give me query of phones having price lesser than 2000 or batter greater than 4000
// 2. Give me query of phones having ram 64 or 128 and color white
// 3. Give me query for ram not equal to 64 or 128

// 4. Query to list phones where ram is 64gb but color is not white
// 5. List phones where price is not in range of 50000-60000  
// 6. list phones where battery is in range of 4000-4500 but price is lower than 30000
  
//  solution
//    Q 2 - // $or:[{"variant.storage":sF},{"variant.storage":sT}],"colors":color})
// Q3 $or:[{"variant.storage":{$ne:sF}},{"variant.storage":{$ne:sT}}]
// Q4 - {"variant.storage":sF,"colors":{$ne:"White"}}
// q5 - {"variant.price":{$ne:priceFrom},"variant.price":{$ne:priceTo}}
