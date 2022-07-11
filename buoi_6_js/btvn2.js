/* Giải phương trình bậc 1:
-	Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)
-	Output: Tìm x
*/

// khai báo a, b ,c --- Data 1: -2x – 9 = -3
/*var a = -2 ;
var b = -9 ;
var c = -3 ; */

function findX (a,b,c){
    // Tính x 
    return x = (c - b)/a ;

    //In x
    //console.log(`X = ${x} `)
}

//In ra kết quả và Gọi hàm
console.log(`X= ${findX(-2,-9,-3)}`)
console.log(`X= ${findX(2,1,2)}`)
console.log(`X= ${findX(-80,-90,50)}`)
