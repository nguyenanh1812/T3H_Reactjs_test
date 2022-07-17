/*Bài 3: Yêu cầu: Viết function tính tổng 
- input: 1 array có chứa số và các mảng con
- output: Tính tổng tất cả các phần tử dựa vào depth của mảng

ví dụ: [x, [y, z]]thì mảng [y, z] sẽ có độ sâu là 2
=> nên tổng của mảng này là: x + 2*(y + z)

=> công thức tính sẽ là: (mảng nested trong mảng)

các phần tử mảng ngoài + độ sâu của mảng nested*(tổng các phần tử trong mảng nested)

ví dụ tiếp: array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
sum array = 5 + 2 + 2*(7 + (-1)) + 3 + 2*(6 + 3*(-13 + 8) + 4) = 12  */


const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// console.log(array[1]) //=>2
// console.log(array[2]) //=> [7,-1]
// console.log(array[2][1])
// console.log("vị trí 3 là "+array[3])
// console.log("vị trí 4-0 là "+array[4][0])
// console.log("vị trí 4-1 là "+array[4][1])
// console.log("vị trí 4-2 là "+array[4][2])
// console.log(array[1][0]) //==> undefined

let total = 0
let sum = 0

function calTotal(array) {
    for (let i in array) {
        if (typeof (array[i]) === "number") {
            sum += array[i]
            // total += sum
        }
        else {
            console.log(array[i])
            for (let j = 1; j < array.length; j++) {
                if (typeof (array[i][j]) === "number") {
                    sum += array[i][j] * j
                    console.log(sum)
                }
            }
        }
        total += sum
        // sum = 0
    }
    console.log(total)
} calTotal(array)



// for (let i in array) {
//     for (let j = 1; j < array.length; j++) {
//         if (typeof (array[i][j]) === "number") {
//             sum += array[i][j] * j
//         }
//     }
//     total +=sum
//     sum = 0
//     console.log(total)
// }

// function totalSum(array) {
//     for (let i of array) {
//         if (typeof (i) === "number") {
//             sum += i
//             total += sum
//         } else {
//             console.log(i)
//             const a = Math.pow(calculateSum(i), deep + 1)
//             console.log(a)
//         }
//     }
// }totalSum(array)
// console.log(total)

// function calculateSum(array) {
//     array.forEach(element => {
//         if (typeof (element) === "number") {
//             sum += element
//         }
//     });
//     return sum
// }
