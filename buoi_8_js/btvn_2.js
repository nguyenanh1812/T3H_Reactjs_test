/*Bài 2: Tìm user là male và có tuổi dưới 40
*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

//Tìm User male va < 40
const valueGender = 'male'
console.log(users.filter(({age,gender}) => gender.toLocaleLowerCase() === valueGender && age < 40))
