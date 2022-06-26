/*Bài 7: Sắp xếp theo firstName và salary */

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

//Theo salary
const sortBySalary = [...users].sort((a, b) => (a.salary > b.salary) ? 1 : -1)
console.log(sortBySalary)

//Theo firstname
const sortByFirstName = [...users].sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
console.log(sortByFirstName)

// //Theo cả salary và firstname
// const sortByFirstNameAndSalary = [...sortByFirstName].sort((a, b) => (a.salary > b.salary) ? 1 : -1)
// console.log(sortByFirstNameAndSalary)