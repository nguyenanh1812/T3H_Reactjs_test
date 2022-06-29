// Bài 8: 
// Cho dữ liệu như sau:
// + Lấy mảng gồm tất cả names
// + Lấy mảng gồm tất cả height
// + Tìm những người có height nhỏ hơn 100
// + Tìm những người có mass lớn hơn 100
// + Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// + Lấy mảng gồm tất cả names
const listNameCharacters = characters.map(({name}, index, characters) => {
    return name
})
console.log(`Mảng chứa tất cả các name là: ${listNameCharacters}`)

// + Lấy mảng gồm tất cả height
const listHeightCharacters = characters.map(({height}, index, characters) => {
    return height
})
console.log(`Mảng chứa tất cả các height là: ${listHeightCharacters}`)

//Tìm những người có height nhỏ hơn 100
const listHeightLess100 = characters.filter(({height}) => height < 100)
console.log(listHeightLess100)

// + Tìm những người có mass lớn hơn 100
console.log(characters.filter(({mass}) => mass > 100))

// + Sắp xếp mảng theo name, mass, hieght, theo giới tính (gender)
//Theo name
const listSortByName = [...characters].sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1)
console.log(listSortByName)

//Theo mass
const listSortByMass = [...characters].sort((a, b) => a.mass > b.mass ? 1 : -1)
console.log(listSortByMass)

//Theo height
const listSortByHeight = [...characters].sort((a, b) => a.height > b.height ? 1 : -1)
console.log(listSortByHeight)

//Theo giới tính
const listSortByGender = [...characters].sort((a, b) => a.gender > b.gender ? 1 : -1)
console.log(listSortByGender)