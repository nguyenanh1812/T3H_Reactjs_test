//Bài 1 tính và so sánh BMI của 2 người
//Data người 1
var name1 = "Marks" ; 
var height1 = 1.69;
var mass1 = 78 ;
var bMI1 ;

//Data người 2
var name2 = "John" ; 
var height2 = 1.95;
var mass2 = 92 ;
var bMI2 ;

//Tính BMI người 1 và 2 và in kết quả
bMI1 = mass1/(height1 * height1) ;
bMI2 = mass2/(height2 * height2) ;

console.log(`${name1} có BMI = ${bMI1}`) ;
console.log(`${name2} có BMI = ${bMI2}`) ;

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