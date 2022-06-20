/*
Thực hiện các phép tính số học trên hai số
-	Input (đầu vào): Cho 2 số và phép tính cần thực hiện 
+  add: cộng ( + )
+ subtract: trừ ( - )
+ multiply: nhân ( * )
+ divide: chia hết ( / )
+ modulus: Chia lấy dư ( % )
-	Output (đầu ra): Thực hiện phép tính với hai số
*/
//Khai báo biến
var a = 78
var b = 97

//Phép tính
var add = a + b
var sub = a - b
var mul = a * b
if (a>b) {
    var div = a / b
    var mod = a % b
} else {
    var div = b / a
    var mod = b % a
}


//In kết quả
console.log(`Tổng 2 số = ${add}`)
console.log(`Hiệu 2 số = ${sub}`)
console.log(`Tích 2 số = ${mul}`)
console.log(`Thương 2 số = ${div}`)
console.log(`Phần dư khi chia 2 số = ${mod}`)