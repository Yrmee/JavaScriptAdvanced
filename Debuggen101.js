// Opdracht: Debuggen 101 - Console.loggen

const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    //hier moeten console.logs komen
    // 1. Log het object
    console.log("Dit is de gehele persoon:", person);
    // 2. Log de naam
    console.log("Dit is naam: " + person.name);
    // 3. Log het geboortejaar
    console.log("Het geboortejaar van " + person.name + " is " + ((new Date()).getFullYear() - person.age));
    // 4. Log alle namen + beroep
    console.log(person.name + " is een " + person.profession);
    // 5. If-statement die checkt of een persoon ouder is dan 50 jaar.
        if (person.age > 50) {
    console.log(", " + person.name + " is ouder dan 50 jaar.");
    }
  }