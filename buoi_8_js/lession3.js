/*
- Method of Array: 
+ Push: add item in array (push in last of array)
+ pop: remove item in array (pop in last of array)
+ shift: remove item in beginning in array
+ unshift: add item in beginning in array
+ includes: array.includes(item) => check item has in array
+ indexOf: function find index of item
+ find: function find data of item => if has return data of item, hasn't return undifine
+ filter: function filter follow by condition => return new array
+ map: 
+ forEach: don't return anything
+ sort: not return new array
+ isArray: check it is array
+ reverse(): return reverse of array
+ reduce: 

- Object
- destructering

*/

// class Student {
//   name;
//   setName() {
//     this.name = "tuyet";
//     console.log(this.name);
//   }
//   hello() {
//     console.log("this is", this);
//     this.setName();
//     console.log(this.name);
//   }
//   eat = () => {
//     console.log(this, "arrow function");
//     console.log("test arrow function");
//     this.name = 'ooo'
//   };
// }

// const student = new Student();
// student.eat();
// student.name


let arr = [8, 2, 3, 4, 5, 6]

console.log(arr.reduce((preValue, currentValue) => {
    return currentValue % 2 === 0
        ? preValue + currentValue
        : preValue
}, 0))

/*
- Khong truyen initialValue: preValue = arr[0]
- truyen ini => preValue = ini
0: preValue, currentvalue => preValue = 0, currentValue = 1 => 0
1: preValue = 0, currentValue = 2 => 2
2: preValue = 2, currentValue = 3 => 2
3: preValue = 2, currentValue = 4 => 6
4: pre = 6, current = 5 => 6
5: pre = 6, current = 6 => 12

*/


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
// output: 1 mang gom co name, height, mass, eye_coolor, gender, totalMassHeight: 

// const result = characters.reduce((a, b) => {
//     a.totalHeight += +b.height
//     a.totalMass += +b.mass
//     return a
// }, {totalMass: 0, totalHeight: 0})

/*

output: 
{
    totalHeight: so,
    totalMass: so
}

0: a: {
    totalHeight: 0,
    totalMass: 0
}, 
b: 
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
a.totalHeight = 0 + 172 = 172
a.totalMass = 0 + 77 = 77 
=> a: {
    totalHeight: 172,
    totalMass: 77
}

1: a: {
    totalHeight: 172,
    totalMass: 77
}
b: {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    a.totalHeight = 172 + 202 = 304
    a.totalMass = 77 + 136 = 210
    => a: {
        totalHeight: 304,
    totalMass: 210
    }


    ...
*/
// console.log(result)

// const resultMap = characters.map((item, index) => {
//     console.log('item', item, 'index', index)
//     return {
//         ...item,
//         'totalMassHeight': +item.height + (+item.mass)
//     }
// })

// console.log(resultMap)

// filter
const filterArr = [2, 12, 9, 12, 11]


// console.log(filterArr.filter(item => item % 2 === 0))
/*
let newArr = []
0: item = 2 => item % 2 => true => newArr = [2]
1: item = 7 => false => newArr = [2]
2: 9 => false ==
3: 12 => true => newArr = [2, 12]

*/

// sort: sap xep cac phan tu cua mang => k tao ra 1 mang moi => anh huong den array ban dau cua em
/*
characters => Anh => sua du lieu cua phan tu dau tien
E: sort => phan tu dau tien => 

clone array =-> newarray =. sort => 

// [...array] split item array va cho vao mang moi de khong anh huong den mang cũ

const resultSort = [...filterArr].sort((a, b) => {
    if(a > b) return 1
    else if(a === b) return 0
    return -1
})

console.log(resultSort, filterArr)

*/


/*
- forEach: duyet qua cac phan tu cua mang
- Tra ve 1 mang => Khong tra ve gt
- 

*/

// tinh tong
// let resultSum = 0
//  filterArr.forEach((item, index, arr) => {
//     resultSum += item
// })

// console.log(resultSum)

// find la ham tim kiem trong js => outPut: item trong array => tim 1 ong => return 

const resultFindPeople = characters.find((item, index) => {
    return item.name === 'Anakin Skywalker'
})

// console.log(resultFindPeople)

// map, reduce, filter, sort, find => su dung nh trong reactjs

// moi nguoi hay viet lai tat ca cac ham nay

// object 

// const obj = {
//     "name": "tuyet",
//     "age": "26"
// }

// destructering

const obj = {
    'name': 'tuyet',
    'age': 26,
    'app': {
        'vi': 'ngot',
        'name': 'Tao',
        'noiTrong': 'Ha Noi',
        'arr': [9, 77, 19]
    }
}


const {app: {arr: [, , f1]}} = obj

const newArr = [1, 9, 5, 0]
const [, t1] = [1, 9, 5, 0]
// const {app: {arr}} = obj

console.log(f1)

// filter, map, reduce, find, forEach, push, pop, shift, unshift
// object => {}, class ten_object, split {...}, 
// destructering
// get key object, object function declerae not of arrow function
// {...}
// [...]






