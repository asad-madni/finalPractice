male = [
    // Raipur
    {
        name: "irshad khan",
        city: "raipur",
        age: 20,
        work: "software engineer",
    },
    {
        name: "arshad khan",
        city: "raipur",
        age: 22,
        work: "civil engineer",
    }, {
        name: "sarfaraz khan",
        city: "raipur",
        age: 25,
        work: "mechanical engineer",
    }, {
        name: "dilshad khan",
        city: "raipur",
        age: 26,
        work: "hardware engineer",
    },
    // bilaspur
    {
        name: "samad khan",
        city: "bilaspur",
        age: 20,
        work: "auto driver",
    }, {
        name: "shahbaz khan",
        city: "bilaspur",
        age: 23,
        work: "kirana store",
    }, {
        name: "sonu khan",
        city: "bilaspur",
        age: 25,
        work: "non veg hotel",
    }, {
        name: "wasim khan",
        city: "bilaspur",
        age: 19,
        work: "cloth shop",
    },
    // bhilai
    {
        name: "abdullah raza khan",
        city: "bhilai",
        age: 23,
        work: "cloth shop",
    }, {
        name: "aftab khan",
        city: "bhilai",
        age: 22,
        work: "bussiness man",
    }, {
        name: "shahanwaz khan",
        city: "bhilai",
        age: 30,
        work: "developer",
    }, {
        name: "dildar khan",
        city: "bhilai",
        age: 23,
        work: "transport manager",
    },
    // kanker 
    {
        name: "tarik khan",
        city: "kanker",
        age: 27,
        work: "pesh imam raza masjid kanker",
    }, {
        name: "khalid raza khan",
        city: "kanker",
        age: 28,
        work: "mobile shop"
    },
]


female = [
    //Raipur
    {
        name: "shabina khan",
        city: "raipur",
        age: 19,
        graduation: "12th pass"

    },
    {
        name: "shabnam siddiqi",
        city: "raipur",
        age: 21,
        graduation: "B com"

    },
    {
        name: "luziana khan",
        city: "raipur",
        age: 22,
        graduation: "M com"

    },
    {
        name: "shamim bano",
        city: "raipur",
        age: 19,
        graduation: "BCA"

    },
    {
        name: "sana khan",
        city: "raipur",
        age: 24,
        graduation: "MCA"

    },

    //BILASPUR
    {
        name: "tarannum fatima",
        city: "bilaspur",
        age: 25,
        graduation: "12th pass"

    },
    {
        name: "lubhna khatoon",
        city: "bilaspur",
        age: 27,
        graduation: "10th pass"

    },
    {
        name: "khatiza bano",
        city: "bilaspur",
        age: 28,
        graduation: "B com"

    },
    {
        name: "nasim bano",
        city: "bilaspur",
        age: 22,
        graduation: "12th pass"

    },
    //BHILAI
    {
        name: "sehra bano",
        city: "bhilai",
        age: 19,
        graduation: "10th pass"

    },
    {
        name: "muskan fatima",
        city: "bhilai",
        age: 21,
        graduation: "PGDCA"

    },
    {
        name: "arisha naaz",
        city: "bhilai",
        age: 24,
        graduation: "10th pass"

    },
    {
        name: "alisha khan",
        city: "bhilai",
        age: 28,
        graduation: "MBA"

    },
    // kanker
    {
        name: "tarannum jahan",
        city: "kanker",
        age: 23,
        graduation: "aalima"

    },
    {
        name: "kulsum fatima",
        city: "kanker",
        age: 24,
        graduation: "12th pass"

    },{
        name: "kaneez fatima",
        city: "kanker",
        age: 22,
        graduation: "10th pass"

    },
    {

    },


]
module.exports={easyNikah}

//Give input gender ,city,age compulsory
// Give input graduation

function easyNikah(gender,city,age,graduation)
{
    let cityMatch = false
    let ageMatch= false
    let save = []
    // for finding groom
    if(gender=="female"){
    for(i=0;i<male.length;i++)
    {
        
        
            if(city==male[i].city)
            {
                cityMatch = true
            if(age>=male[i].age)
            {
                ageMatch = true
                save.push(male[i])
            }
            }
        }
    }
    /// for finding bride
    if(gender=="male"){
        for(j=0;j<female.length;j++)
        {
            
            
                if(city==female[j].city)
                {
                    cityMatch = true
                if(age>=female[j].age)
                {
                    ageMatch = true
                    save.push(female[j])
                }
                }
            }
        }
if(!cityMatch) return "No one found in this city"
if(cityMatch&&!ageMatch) return "No applicants of this age"
    return save
}