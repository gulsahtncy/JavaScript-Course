// LECTURE: Values and Variables
let country = "Turkey";
let continent = "Asia and Europe";
let population = 84;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = "Turkish";
const countryy = "Turkey";
const continentt = "Asia and Europe";
const isIslandd = false;
// isIsland = true;  ERROR not be changed

// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its
${population} million people speak ${language}`;

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
  below average`
  );
}
