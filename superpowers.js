// console.log("Opdracht: de 'SuperPowers'van .map .filter .reduce!");

const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];

// 1. Maak een array van alle superhelden namen.

const heroNames = superheroes.map((item) => {
    return item.name
});

console.log("Alle superhelden namen zijn:", heroNames)

// 2. Maak een array van alle "lichte" superhelden (<190 pounds).

const weightBelow190 = superheroes.filter((item) => {
    return item.weight < 190
});

console.log("Alle superhelden onder de 190pounds:", weightBelow190);

// 3. Maak een array met de namen van de superhelden die 200 pounds wegen.

const heroesWhoWeight200 = superheroes.filter((item) => {
    return item.weight == 200
}).map((item) => {
    return item.name
});

console.log("Superhelden die precies 200pounds wegen:", heroesWhoWeight200);

// 4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad.

const comicsFirstAppearance = superheroes.map((item) => {
    return item.first_appearance
});

console.log("Comics waar de superhelden hun 'first-appearances hebben gehad", comicsFirstAppearance);

// 5. Maak een array met alle superhelden van DC Comics. 
// Is dat gelukt? Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

// DC Comics
const heroesFromDCComics = superheroes.filter((item) => {
    return item.publisher == "DC Comics"
}).map((item) => {
    return item.name
});

console.log("Superhelden van DC Comics:", heroesFromDCComics);

// Marvel Comics
const heroesFromMarvelComics = superheroes.filter((item) => {
    return item.publisher == "Marvel Comics"
}).map((item) => {
    return item.name
});

console.log("Superhelden van Marvel Comics:", heroesFromMarvelComics);

// 6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! 
// Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? 
// Oh ja, en hebben alle superhelden wel een gewicht?

const sum = (accumulator, currentValue) => accumulator + currentValue;

// Gewicht van DC.
const totalWeightDC = superheroes.filter((item) => {
    return item.publisher === 'DC Comics';
  }).map((item) => {
    return parseInt(item.weight);
  }).reduce(sum);

console.log("Het totale gewicht van alle DC superhelden in pounds:", totalWeightDC);

// 7. Gewicht van Marvel.
const totalWeightMarvel = superheroes.filter((item) => {
    return item.publisher === 'Marvel Comics';
  }).map((item) => {
    const heroWeight = parseInt(item.weight);
    if (isNaN(heroWeight)) {
      return 0;
    }
    return heroWeight;
  }).reduce(sum);

  console.log("Het totale gewicht van alle Marvel superhelden in pounds:", totalWeightMarvel);

