    req = [
    {
        male: "ashish jain",
        skill: "frontend developer",
        exp: 6,
        location: "raipur",
    },
    {
        male: "aakash sharm",
        skill: "frontend developer",
        exp: 5,
        location: "raipur",
    },
    {
        male: "indrajeet sahu",
        skill: "fronted developer",
        exp: 5,
        location: "raipur",
    },
    {
        male: "yash sing",
        skill: "frontend developer",
        exp: 3,
        location: "raipur",
    },
    {
        male: "jay sahu",
        skill: "backend developer",
        exp: 5,
        location: "raipur",
    },
    {
        male: "lokesh sharma",
        skill: "backend developer",
        exp: 5,
        location: "raipur",
    },
    {
        male: "Raja sahu",
        skill: "backend developer",
        exp: 8,
        location: "raipur",
    },
    {
        male: "ankit sharma",
        skill: "backend developer",
        exp: 6,
        location: "raipur",
    },

    // BILASPUR DEVELOPERS
    {
        male: "rajesh khanna",
        skill: "backend developer",
        exp: 5,
        location: "bilaspur",
    },
    {
        male: "daniel singh",
        skill: "backend developer",
        exp: 5,
        location: "bilaspur",
    },
    {
        male: "Aman jha",
        skill: "frontend developer",
        exp: 4,
        location: "bilaspur",
    },
    {
        male: "Aniket shrivastaw",
        skill: "frontend developer",
        exp: 4,
        location: "bilaspur",
    },
    ];
////////////////////////////////FEMALE//////////////////////////////////////////////////////////

reqf = [
  {
    female: "Nisha sahu",
    skill: "frontend developer",
    exp: 2,
    location: "raipur",
  },
  {
    female: "Snehal gawai",
    skill: "frontend developer",
    exp: 3,
    location: "raipur",
  },
  {
    female: "Rajshri sahu",
    skill: "frontend developer",
    exp: 4,
    location: "raipur",
  },
  {
    female: "durga sahu",
    skill: "frontend developer",
    exp: 5,
    location: "raipur",
  },
  ////////////////////bilaspur//////////////
  {
    female: "sonia gandhi",
    skill: "backend developer",
    exp: 5,
    location: "bilaspur",
  },
  {
    female: "suchitra nand",
    skill: "backend developer",
    exp: 4,
    location: "bilaspur",
  },
  {
    female: "ujala sharma",
    skill: "backend developer",
    exp: 3,
    location: "bilaspur",
  },
  {
    female: "priya mishra",
    skill: "backend developer",
    exp: 2,
    location: "bilaspur",
  },
  //////////////////bhilai//////////////
  {
    female: "priya makhija",
    skill: "frontend developer",
    exp: 3,
    location: "bhilai",
  },
  {
    female: "nasim bano",
    skill: "frontend developer",
    exp: 4,
    location: "bhilai",
  },
  {
    female: "zareen bano",
    skill: "backend developer",
    exp: 5,
    location: "bhilai",
  },
  {
    female: "khadima hussain",
    skill: "backend developer",
    exp: 6,
    location: "bhilai",
  },
];

module.exports = { job };
// Task 1 - Take input gender and skill compulsory
// Task 2 - Take input experience(show all data)
// Task 3 - Take location
// Error 1 - Skill - please provide proper skill
// Error 2 - Experience -There is no employe of this much experience
// Error 3 - No employees found in this city

function job(gender, skill, exp, city) {
  let save = [];
  let Task1Match = false;
  let expMatch = false;
  let locationMatch = false;
  for (i = 0; i < req.length; i++) {
    if (gender == "male" && skill == req[i].skill) {
      Task1Match = true;
      if (exp) {
        if (exp == req[i].exp) {
          expMatch = true;
          if (city) {
            if (city == req[i].location) {
              locationMatch = true;
              //output of location
              save.push(req[i]);
            }
          } else {
            //this is the output of exp
            save.push(req[i]);
          }
        }
      } else {
        // this is the output of gender and skill input
        save.push(req[i]);
      }
    }
  }

  for (j = 0; j < reqf.length; j++) {
    if (gender == "female" && skill == reqf[j].skill) {
      Task1Match = true;
      if (exp) {
        if (exp == reqf[j].exp) {
          expMatch = true;
          if (city) {
            if (city == reqf[j].location) {
                locationMatch =true
              save.push(reqf[j]);
            }
          }
        
          else save.push(reqf[j]);
        }
      } else {
        save.push(reqf[j]);
      }
    }
  }

  if (!Task1Match) return "Skill is not matching";
  if (exp && !expMatch) return "Expericence  does not match";
  if (city && !locationMatch) return "There is no employee from this city";
  return save;
}
