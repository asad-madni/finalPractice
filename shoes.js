
let shoes =
    [
        {
            brand: "nike",
            price: 5000,
            type: "sports",
            warranty: "5 years"
        }
        ,
        {
            brand: "nike",
            price: 2000,
            type: "casual",
            warranty: "5 years"
        },
        {
            brand: "bata",
            price: 4000,
            type: "formal",
            warranty: "6 years"
        },
        {
            brand: "nike",
            price: 1000,
            type: "casual",
            warranty: "5 years"
        }
        ,
        {
            brand: "nike",
            price: 8000,
            type: "sports",
            warranty: "5 years"
        },
        {
            brand: "skecher",
            price: 9000,
            type: "sports",
            warranty: "5 years"
        },
        {
            brand: "reebok",
            price: 10000,
            type: "sports",
            warranty: "5 years"
        }
    ]


// Q1 -Keep brand name compulsory , if brand is not there then program will end
// Q2- agar brand diya hai toh price check kro wrna brand hi show kr do 
//Q3 - ab us price me type check kro 

function shoe(brand, price, type) {
    let brandMatch = false
    let typeMatch = false
    let save = []
    for (i = 0; i < shoes.length; i++) {
        if (brand == shoes[i].brand) {
            brandMatch = true
            if (price) {
                if (price >= shoes[i].price) {

                    if (type == shoes[i].type) {
                        typeMatch = true
                        save.push(shoes[i])
                    }

                }
            }
            else
            save.push(shoes[i])
        }
    }
    
if(!brandMatch)
return "We don't have shoes of this brand"

if(price&&!typeMatch)
return "Type is not matching in the given price"

return save
}


























module.exports = { shoe }