/*Bài 4: Sử dụng map để chuyển đổi key của object thành camelCase*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

let usersTwo = users.map((user, index, users) => {
    return {
        "iD": user.id,
        "fistName": user.first_name,
        "lastName": user.last_name,
        "email": user.email,
        "gender": user.gender,
        "age": user.age,
        "salary": user.salary
    }
})
console.log(usersTwo)