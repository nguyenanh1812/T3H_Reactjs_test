/*Bài 1: Yêu cầu sử dụng map, filter, reduce để làm những bài tập sau:
-	Input: Cho 1 mảng
-	Output: Tính tổng của những số dương
 */

let sum = 0
const array = [-1, 2, 3, -4, 0, 7]

//reduce
console.log(array.reduce((sum, currentVal) => {
    if (currentVal > 0){
        return sum + currentVal
    }else {
        return sum
    }
},0))

//filter
const arrayTwo = array.filter((e)=> e> 0)
arrayTwo.forEach((e)=> sum+=e)
console.log(sum)