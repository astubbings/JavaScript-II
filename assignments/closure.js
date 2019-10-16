// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function country(countryName) {
  const lang1 = 'English';
  const lang2 = 'Hillbilly';
  console.log(`${countryName} is on the north american continent south of Canada and north of Mexico`);

  function state(stateName) {
    const sport = 'skiing'
    console.log(`The most popular sport in ${stateName} is ${sport}`);

    function capital(cityName) {
      const food = 'burgers'
      console.log(`${cityName} is the capital of ${countryName} and the offical languages are ${lang1} and ${lang2} and the national food is ${food}.  The state sport of ${stateName} is ${sport}`);

    }// this closes the capital
    capital('Washington DC');

  }// this closes the province
  state('Utah');

}// this closes the country 
country('United States');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
