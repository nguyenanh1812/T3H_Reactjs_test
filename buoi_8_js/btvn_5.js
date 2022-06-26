/*Bài 5: Dùng reduce để làm từ bài 1 -> bài 4
*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

/*Bài 1: lấy first_name và last_name của tất cả người dùng và đặt nó vào một mảng khác. 
Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng*/
console.log("---Bài 1---")
let usersTwo = []
users.reduce((preValue, currentValue) => {
    return usersTwo.push({
        "first_name": currentValue.first_name,
        "last_name": currentValue.last_name
    })
}, 0)
console.log(usersTwo)

/*Bài 2: Tìm user là male và có tuổi dưới 40*/
console.log("---Bài 2---")
let filterUser = []
users.reduce((preValue, currentValue) => {
    return currentValue.gender === "Male" && currentValue.age < 40
        ? console.log(currentValue)
        : preValue
}, 0)

/*Bài 3: Làm giống bài 1 nhưng sử dụng map = Bài 1*/

/*Bài 4: chuyển đổi key của object thành camelCase*/
console.log("---Bài 4---")
let usersCamelCase = []
users.reduce((preValue, currentValue) => {
    return usersCamelCase.push({
        "iD": currentValue.id,
        "fistName": currentValue.first_name,
        "lastName": currentValue.last_name,
        "email": currentValue.email,
        "gender": currentValue.gender,
        "age": currentValue.age,
        "salary": currentValue.salary
    })
}, 0)
console.log(usersCamelCase)