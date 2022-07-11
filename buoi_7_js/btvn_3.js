/*Bài 3: 
-	Input: Cho 1 mảng
-	Tính tổng mảng đó (dùng for, reduce …. Tất cả các cách để tính tổng mảng đó) */

//Reduce 
/* 
arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
  // return Trả về kết quả từ việc thực hiện một cái gì đó cho Accumulator hoặc currentValue
}[, initialValue])
- callback là hàm thực thi với từng phần tử của hàm, với 4 tham số là: accumulator, currentValue, index và array.
- accumulator biến tích lũy, được trả về sau mỗi lần gọi hàm callback.
- currentValue phần tử của mảng đang được xử lý.
- index (Optional) chỉ số của phần tử trong mảng đang được xử lý.
- array (Optional) mảng hiện tại gọi hàm reduce().
- initialValue là giá trị cho tham số thứ nhất (accumulator) của hàm callback trong lần gọi hàm đầu tiên. 
Nếu giá trị này không được cung cấp thì giá trị phần tử đầu tiên của mảng sẽ được sử dụng.
*/

//Bài giải: Dùng các loại for, while, do while, forEach, reduce


function sum(arr) {

    let sum = 0, sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
    //Dùng for thường
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(`Dùng for thường tính tổng = ${sum}`)

    //for in
    for (let i in arr) {
        sum1 += arr[i]
    }
    console.log(`Dùng for in tính tổng = ${sum1}`)

    // for of
    for (let i of arr) {
        sum2 += i
    }
    console.log(`Dùng for of tính tổng = ${sum2}`)

    //Dùng while 
    let j = 0
    while (j < arr.length) {
        sum3 += arr[j]
        j++
    }
    console.log(`Dùng While tính tổng = ${sum3}`)

    //Dùng do while
    let x = 0
    do {
        sum4 += arr[x]
        x++
    } while (x < arr.length)
    console.log(`Dùng Do-While tính tổng = ${sum4}`)

    //Dung forEach
    arr.forEach(element => { sum5 += element })
    console.log(`Dùng forEach tính tổng = ${sum5}`)

    //Dùng reduce
    console.log("Dùng Reduce tính tổng = " + arr.reduce((sum, currentValue) => sum + currentValue))

    //Ngăn cách các giữa các data test
    console.log("----------------------")
}
sum([1, 2, 3, 4, 5])
sum([10, 5, 35])
sum([99, 1, 60])