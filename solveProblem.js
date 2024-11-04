// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" },
  { name: "Diana", age: 22, gender: "female" },
];
const filterAndMapNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};
const result = filterAndMapNames(people);
console.log(result);
