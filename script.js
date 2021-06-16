// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
    ikRockArrowFunctions()
  // Deel A: Bekijk de bovenstaande functie. Bouw deze functie om tot een arrow function.
  const ikRockArrowFunctionsA = () => {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctionsA()

// Deel B: schrijf de onderstaande functie om naar een arrow functie op 1 regel.
const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();
  // Mijn oplossing:
  const fivePlusSevenB = () => 5 + 7;
  fivePlusSevenB();

/* Deel C: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), die de params a en b bij-elkaar optelt. 
Noem de functie myFunction. 
*/
const myFunction = (a, b) => a + b;
  myFunction();

// Deel D: Schrijf een arrow function op 1 regel, die de parameter a behoudt, en altijd a plus 5 returned. Noem de functie addFive.
const addFive = number => number + 5;
  addFive();

/* Deel E: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) 
die een simpel object returned: {greeting: "hoi"}
*/
createObject => ({greeting: "hoi"}) 

