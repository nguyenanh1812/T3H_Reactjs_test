/*Bài 1: Sử dụng forEach để lấy first_name và last_name của tất cả người dùng và đặt nó vào một mảng khác. 
Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng
*/

// Đọc file Json
// let fs = require("fs")
// const data = fs.readFileSync('./data.json', 'utf8')
// // phân tích chuỗi JSON cho đối tượng JSON
// const users = JSON.parse(data);

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

const usersTwo = []
users.forEach(({ first_name, last_name }) => {
    usersTwo.push(`${first_name} ${last_name}`)
})
console.log(usersTwo)



