//Bài 1 tính và so sánh BMI của 2 người
//Data người 1
/*var name1 = "Marks" ; 
var height1 = 1.69;
var mass1 = 78 ;
var bMI1 ;

//Data người 2
var name2 = "John" ; 
var height2 = 1.95;
var mass2 = 92 ;
var bMI2 ; */

//Hàm tính và trả về giá trị BMI
function getBMI(height,mass)
{
    return mass/(height * height) 
}
//Hàm so sánh BMI và trả về kết quả so sánh BMI giữa 2 người
function compareBMI(name1, name2, bMI1, bMI2) {
    console.log(`--- So sánh BMI của ${name1} và ${name2} ---`)
    console.log(`${name1} có BMI = ${bMI1}`) 
    console.log(`${name2} có BMI = ${bMI2}`) 
    
    // So sánh tìm người có BMI cao hơn 
    if (bMI1 > bMI2){
        console.log(`${name1} BMI is higher than ${name2}!`) 
    }
    else if (bMI1 < bMI2){
        console.log(`${name2} BMI is higher than ${name1}!`)
    }
    else {
        console.log(`${name1} ${bMI1} = ${name2} ${bMI2}!`)
    }
    console.log("---------------")
}

//Gọi gàm so sánh đồng thời truyền giá trị lấy BMI
compareBMI("Marks", "John", getBMI(1.69,78), getBMI(1.95,92))
compareBMI("TAnh", "Duc", getBMI(2,100), getBMI(2.01,102))
compareBMI("Alist", "Deft", getBMI(1.58,78), getBMI(1.68,50))