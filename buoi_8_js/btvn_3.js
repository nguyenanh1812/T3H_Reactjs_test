/*Bài 3: Làm giống bài 1 nhưng sử dụng map*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')
const usersTwo = users.map(({ first_name, last_name }, index, users) => {
    return `${first_name} ${last_name}`
})
console.log(usersTwo)