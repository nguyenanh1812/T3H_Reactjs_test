/*Bài 1:
Viết function đưa vào một mảng chưa sắp xếp
Trả ra một mảng chứa 3 số lớn nhất đã được sắp xếp 
Ví dụ: 
array = [141, 1, 17, -7, 18, 541, 8, 7, 7]
=> array cần tìm là [18, 141, 541]
 */

const array = [141, 1, 17, -7, 18, 541, 8, 7, 7]
function printSubArray(sortArray, amount){
    while(sortArray.length > amount){
       sortArray.shift()
    }
    console.log(sortArray)
}

const arraySort = [...array].sort((a, b) => (a > b) ? 1 : -1)
// console.log(arraySort)
printSubArray(arraySort, 3)