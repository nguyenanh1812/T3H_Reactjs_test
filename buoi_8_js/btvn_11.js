// Viết một hàm gọi là displayName () lấy một đối tượng làm đối số và in ra họ và tên của người đó. Sử dụng cấu trúc đối tượng trong đối số hàm.
// Data Test:
person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

function displayName({ first, last }) {
    return console.log(`${first} ${last}`)
}
displayName(person)


function displayName1({ first, last, twitter }) {
    return console.log(`${first} ${last} has twitter ${twitter}`)
}
displayName1(person)