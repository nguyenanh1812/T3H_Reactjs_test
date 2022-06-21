/* 
-	Input: Cho hai số
-	Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới 
dạng ‘N là số lớn nhất’ với N là số lớn nhất
*/
//Khai báo số a,b
//var a = 9.5 
//var b = 9.5

function max(a,b){
    //So sánh 2 số
    if (a>b) {
        console.log(` Số a = ${a} là số lớn nhất!`)
    }
    else if (a===b) {
        console.log(` Hai số a và b bằng nhau là ${a} và không có số lớn nhất!`);
    }
    else {
        console.log(` Số b = ${b} là số lớn nhất!`)
    }
    console.log("----------")
}

//Gọi hàm
max(9,8)
max(9,9)
max(102,10004)