theater = [
  {
    Day: "today",
    time: 10,
    film: "kgf",
    place: "PVR ,city center mall ",
  },
  {
    Day: "today",
    time: 11,
    film: "kgf",
    place: "PVR ,magneto ",
  },
  {
    Day: "today",
    time: 12,
    film: "kgf",
    place: "PVR ,colors ",
  },
  {
    Day: "tomorrow",
    time: 10,
    film: "spider man",
    place: "PVR ,city center mall ",
  },
  {
    Day: "tomorrow",
    time: 11,
    film: "spider man",
    place: "PVR ,magneto  mall",
  },
  {
    Day: "tomorrow",
    time: 12,
    film: "spider man",
    place: "cinemax, colors mall",
  },
  {
    Day: "tomorrow",
    time: 9,
    film: "pushpa",
    place: "PVR ,city center mall ",
  },
  {
    Day: "tomorrow",
    time: 8,
    film: "pushpa",
    place: "PVR ,magneto mall ",
  },
  {
    Day: "1 june",
    time: 7,
    film: "pushpa",
    place: "cinemax, colors mall",
  },
  {
    Day: "2 june",
    time: 5,
    film: "bahubali",
    place: "PVR ,city center mall ",
  },
  {
    Day: "3 june",
    time: 4,
    film: "bahubali",
    place: "PVR ,magneto mall",
  },
  {
    Day: "4 june",
    time: 3,

    film: "bahubali",
    place: "cinemax, colors mall ",
  },
];

// Take film and Day and time

function movie(film, day, time) {
  let filmMatch = false;
  let dayMatch = false;
  let timeMatch = false;
  let save = [];

  for (i = 0; i < theater.length; i++) {
    if (film == theater[i].film) {
      filmMatch = true;
      if (day == theater[i].Day) {
        dayMatch = true;
        if (time == theater[i].time) {
          timeMatch = true;
          save.push(theater[i]);
        }
      } else save.push(theater[i]);
    }
  }
  if (!filmMatch) return "No films available";
  if (filmMatch && !dayMatch) return "No shows avaialble on this date";
  if (dayMatch && !timeMatch) return "Moive is not available in this time";

  return save;
}

module.exports = { movie };
