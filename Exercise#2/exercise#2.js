
let people = ["Greg", "Mary", "Devon", "James"];

// Using a for-loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Using a forEach(),  iterate through this array and console.log all of the people.
people.forEach(function (person) {
    console.log(person);
    }
);

// Write the command to remove "Greg" from the array.
function removeGreg() {
    people.splice(0, 1);
    }
removeGreg();
console.log(people);

// Write the command to remove "James" from the array.
function removeJames() {
    people.splice(1, 1);
    }
removeJames();
console.log(people);

// Write the command to add "Matt" to the front of the array.
function addMatt() {
    people.unshift("Matt");
    }
addMatt();
console.log(people);

// Write the command to add your name to the end of the array.
function addYourName() {
    people.push("Jordy");
    }
addYourName();
console.log(people);

// Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop. (hint: use break keyword to exit loop)
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt"
let copy = people.slice(0, 2);
console.log(copy);

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"]
people.splice(2, 1, "Elizabeth");
people.splice(3, 0, "Artie");
console.log(people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob");
console.log(withBob);
