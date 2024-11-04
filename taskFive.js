// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 },
];
const modifyAge = (arr, name, newAge) => {
  const person = arr.find((p) => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return arr;
};
const updatedArray = modifyAge(people, "Bob", 26);
console.log(updatedArray);
