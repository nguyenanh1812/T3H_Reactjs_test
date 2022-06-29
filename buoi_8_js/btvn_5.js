/*Bài 5: Dùng reduce để làm từ bài 1 -> bài 4
*/

// đọc tệp JSON là sử dụng require() => đọc và phân tích cú pháp tệp JSON và trả về một đối tượng JSON
const users = require('./data.json')

/*Bài 1: lấy first_name và last_name của tất cả người dùng và đặt nó vào một mảng khác. 
Thứ tự trong mảng mới phải cùng thứ tự với người dùng xuất hiện trong mảng người dùng*/
console.log("---Bài 1---")
let result = users.reduce((usersTwo, currentValue) => {
    usersTwo.push(`${currentValue.first_name} ${currentValue.last_name}`)
    return usersTwo
}, [])
console.log(result)

/*Bài 2: Tìm user là male và có tuổi dưới 40*/
console.log("---Bài 2---")
const valueGender = 'male'
const resultTwo = users.reduce((preValue, currentValue) => {
    if (currentValue.gender.toLocaleLowerCase() === valueGender && currentValue.age < 40) {
        preValue.push(currentValue)
    }
    return preValue
}, [])
console.log(resultTwo)
/*Bài 3: Làm giống bài 1 nhưng sử dụng map = Bài 1*/

/*Bài 4: chuyển đổi key của object thành camelCase*/
console.log("---Bài 4---")
const usersCamelCase = users.reduce((preValue, currentValue) => {
    preValue.push({
        "iD": currentValue.id,
        "fistName": currentValue.first_name,
        "lastName": currentValue.last_name,
        "email": currentValue.email,
        "gender": currentValue.gender,
        "age": currentValue.age,
        "salary": currentValue.salary
    })
    return preValue
}, [])
console.log(usersCamelCase)