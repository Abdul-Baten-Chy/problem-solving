// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2018 },
  { make: "Honda", model: "Civic", year: 2019 },
];
const sortCarsByYear = (arr) => {
  return arr.sort((a, b) => a.year - b.year);
};
const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
