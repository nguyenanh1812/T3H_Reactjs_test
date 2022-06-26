/*Bài 3: Làm giống bài 1 nhưng sử dụng map*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')
let usersTwo = users.map((user, index, users) => {
    return {
        "first_name": user.first_name,
        "last_name": user.last_name
    }
})
console.log(usersTwo)