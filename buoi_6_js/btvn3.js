/*Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng 3 lần khác. Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!
Yêu cầu:
-	Tính điểm trung bình của mỗi đội
-	So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi và in ra đội chiến thắng. Đừng quên rằng có thể có một trận hòa, 
vì vậy hãy kiểm tra điều đó (hòa có nghĩa là họ có cùng điểm trung bình)
-	Yêu cầu về số điểm tối thiểu là 100. Với quy tắc này, một đội chỉ thắng nếu có số điểm cao hơn đội còn lại, đồng thời phải đạt ít nhất 100 điểm. 
Với yêu cầu này hãy tìm đội thắng. Nếu không có đội thắng hãy in ra thông báo hợp lệ (Không có đội thắng cuộc)
-	Điểm số tối thiểu cũng áp dụng cho một trận hòa!
Vì vậy kết quả hòa chỉ xảy ra khi cả hai đội có số điểm bằng nhau và cả hai đều có số điểm lớn hơn hoặc bằng 100 điểm. Nếu không, không đội nào giành được cúp
 */

//khai báo Data 1: Dolphins có điểm là 96, 108 và89. Koalas có điểm là  88, 91 và 110 
//Data Dolphins
var compete1D = 96 ;
var compete2D = 108 ;
var compete3D = 89 ;

//Data Koalas
var compete1K = 88 ;
var compete2K = 91 ;
var compete3K = 110 ;

//tính tb
var competeAvgD = (compete1D + compete2D + compete3D) /3 ; 

var competeAvgK = (compete1K + compete2K + compete3K) /3 ; 

console.log(`AVG Dolphins = ${competeAvgD}`) ;
console.log(`AVG Koalas = ${competeAvgK}`) ;

//so sánh in kết quả
if (competeAvgD > competeAvgK && competeAvgD >=100) {
    console.log("Dolphins là đội thắng cuộc!") ;
}
else if (competeAvgD < competeAvgK && competeAvgK >=100) {
    console.log("Koalas là đội thắng cuộc!") ;
}
else if (competeAvgD == competeAvgK && competeAvgK >=100) {
    console.log("Hai đội Koalas và Dolphins hòa nhau!") ;
}
else  {
    console.log("Không có đội thắng cuộc!") ;
}
