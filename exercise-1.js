/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const mainEvent = {
  name: "MainEvent",
  cuisines: ["Pizza", "chicken", "Burritos"],
  numberOfStars: 5,
  favorited: false,
};

mainEvent.address = "1234 E place ST";
mainEvent.zipcode = 12345;
mainEvent.acceptsReservations = false;

mainEvent.numberOfStars += 1;
mainEvent.favorited = !mainEvent.favorited;
mainEvent.cuisines.push("tacos");

function retrieveProperty(key, obj) {
  if (obj[key]) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}
