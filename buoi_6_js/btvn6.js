/* 
-	Input: Cho vào tên học sinh, và điểm số của học sinh đó
-	Output: Tìm xếp loại hạnh kiểm và in ra dưới dạng Tên_học_sinh xếp loại loại_điểm_của_học_sinh
Xếp loại điểm như sau:
+ 90 <= điểm <= 100: Loại S
+ 80 <= điểm < 90: Loại A
+ 70 <= điểm < 80: Loại B
+ 60 <= điểm < 70: Loại C
+ 50 <= điểm < 60: Loại D
+ 40 <= điểm < 50: Loại E
+ 0 <= điểm < 40: Bạn không được lên lớps
*/
//Khai báo biến
//var stdName = 'TAnh'
//var points = 87
function rank(stdName, points){ 
    //So sánh tìm xếp loại
    if (100 < points || points < 0){
        console.log(`Điểm nhập sai!`)
    }
    else if ( 90 <= points ) {
        console.log(`Học sinh ${stdName}: loại S`)
    } else if ( 80<=points ) {
        console.log(`Học sinh ${stdName}: loại A`)
    } else if ( 70 <= points ) {
        console.log(`Học sinh ${stdName}: loại B`)
    } else if ( 50 <= points ) {
        console.log(`Học sinh ${stdName}: loại C`)
    } else if ( 40 <= points ) {
        console.log(`Học sinh ${stdName}: loại D`)
    } else {
        console.log(`Học sinh ${stdName}: Không được lên lớp!`)
    }
}
rank("TAnh", 1001)
rank("AnhNT", 68)