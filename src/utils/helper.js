let nameList = [
  "Morgan Serrano",
  "Milan McGee",
  "Kayleigh Washington",
  "Juan Krueger",
  "Kamari Archer",
  "Ephraim Clarke",
  "Kaitlyn Odom",
  "Kylian Duncan",
  "Elise Rios",
  "Israel Winters",
  "Kataleya Ellis",
  "Cole Ball",
  "Abby Morgan",
  "Hunter Corona",
  "Marianna Molina",
  "Prince Velasquez",
  "Esme Adams",
  "Hudson Lester",
  "Averi Logan",
  "Rocco Avalos",
  "Paloma Page",
  "Pablo Zhang",
  "Sarai Chen",
  "Emmanuel Bernal",
  "Emmeline Robles",
  "Otto Wu",
  "Liana Coffey",
  "Kody Banks",
  "Cali Greene",
  "Griffin Allison",
  "Chelsea Salinas",
  "Edgar Bishop",
  "Brooklynn Gutierrez",
  "Luca Wilcox",
  "Ashlyn Barrett",
  "Angelo Chapman",
  "Zuri Morton",
  "Roland Flowers",
  "Ariya Frank",
  "Braylen Callahan",
  "Kimber Hubbard",
  "Forrest Vu",
  "Kimora Pitts",
  "Trey Estes",
  "Brittany Frost",
  "Dario Bishop",
  "Brooklynn Turner",
  "Joshua Harper",
  "Ana Lucas",
  "Chance Xiong",
  "Amayah Correa",
  "Zakai Dunlap",
  "Iliana Marin",
  "Aldo Meadows",
  "Pearl Delgado",
  "Colt Reed",
  "Valentina Stephenson",
  "Joe Schwartz",
  "Lilliana Cannon",
  "Archie Delgado",
  "Alani Bush",
  "Tyson Frost",
  "Paula Livingston",
  "Ambrose Horton",
  "Aitana Oliver",
  "Karson Quintero",
  "Keyla King",
  "Julian Hopkins",
  "Gabriela Rich",
];
export function generateNames() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

//Function to check the number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}
