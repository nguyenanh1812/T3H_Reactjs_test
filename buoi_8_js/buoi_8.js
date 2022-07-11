// Mảng: shift() - xóa giá trị đầu
//pop() xóa gia tri cuoi
//unshift() thêm phần tử vào đầu
//push() thêm vào cuối

let arr = [1, 2, 3, 4, 5, 6]

// reduce tính tổng các số chẵn
console.log("Tổng chẵn " + arr.reduce((sum, currentValue) => {
    return currentValue % 2 == 0
        ? sum + currentValue
        : sum
}))
// reduce tính tổng các số lẻ
console.log("Tổng lẻ " + arr.reduce((sum, currentValue) => currentValue % 2 != 0 ? sum + currentValue : sum, 0))

// reduce tính tích các số trong dãy
console.log(arr.reduce((mul, currentValue) => mul * currentValue))


// object
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
//console.log(Object.values(characters[0]))
//console.log(characters[0].height)

// reduce yêu cầu tính tổng height và mass
console.log("tổng height " + characters.reduce((sum, currentValue) => {
    return sum + currentValue.height * 1
}, 0))

console.log("tổng mass " + characters.reduce((sum, currentValue) => {
    return sum + Number(currentValue.mass)
}, 0))

//1 reduce tính tổng cân nặng và tổng chiều cao
console.log("tổng mass và height " + characters.reduce((sum, currentValue) => {
    return sum + Number(currentValue.mass) + (+currentValue.height)
}, 0))

// dunng 1 reduce in ra cả tổng mass và tổng height
console.log("1 reduce in tổng height và mass")
const heightAndMass = characters.reduce((sum, currentValue) => {
    sum[0] += currentValue.height * 1
    sum[1] += currentValue.mass * 1
    return sum
}, [0, 0])
console.log(`Tổng chiều cao ${heightAndMass[0]} \nTổng cân nặng ${heightAndMass[1]}`)

// console.log("Dùng reduce in ra giá trị object của ng có cân nặng lớn nhất")
// //Tìm người có cân nặng lớn nhất (trả về kiểu object show name, height, mass),  tìm người có chiều cao lớn nhất
// console.log(characters.reduce((a, currentValue) => {
//     if (currentValue > a) {
//         nameChar = currentValue.name
//         heightChar = currentValue.height
//         massChar = currentValue.mass
//     }
// }, a = { nameChar: '', heightChar: 0, massChar: 0 }))


//Map => tạo ra 1 mảng mới
const resultMap = characters.map((item, index) => {
    console.log('item', item, 'index', index)
    return {
        ...item,
        'totalMassHeight': +item.height + (+item.mass)
    }
})
console.log(resultMap)

const filterArr = [1, 2, 3, 4]
let resultSum = 0;
filterArr.forEach((item, index, arr) => {
    resultSum += item
})
console.log(resultSum)

//không dùng được arrow function trong object
const obj = {
    "name": "tuyet",
    "age": "26",
    getInfor: function () {
        return this.name + this.age
    },
    "app": {
        "vi": "ngot",
        "name": "tao",
        "noiTrong": "HaNoi",
        "arr": [9, 2, 19]
    }
}
console.log(obj.getInfor())


//Destructuring là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array
const { app: { name, noiTrong } } = obj
console.log(name, noiTrong)

const { app: { arr: [, , t3] } } = obj
console.log(t3)

const newArr = [1, 9, 3, 1]
//const [t1, t2, t3, t4] = newArr
//console.log(t1)
const [, t4] = newArr
console.log(t4)
