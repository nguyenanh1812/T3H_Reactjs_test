/*Bài 2:
-	Input: Cho 1 mảng
-	Output: Tính tổng của bình phương từng phần tử
 */
let sum = 0
const array = [1, 3, 5, 10]

//map
const arrayTwo = array.map((e) => {
    return e * e
})

arrayTwo.forEach((e) => {
    sum += e
})
console.log(sum)

//reduce
console.log(array.reduce((sumOS, currentVal)=>sumOS + currentVal*currentVal , 0))