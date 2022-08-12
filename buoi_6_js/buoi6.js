// khai báo biến let, const, var

// kiểu đặt tên let nameOfSchool = 'VGA'

// var: global funciton {}, for, it
// let, var không cần gán giá trị ban đầu còn const thì phải gán
// const cho giá trị bất biến không thể thay đổi
// giá trị sai: false, 0, null, undefined, NaN, '
// bài toán kiểm tra số chẵn lẻ
// cách 1 chia dư cho 2
/*
var n = 7 ;
//n = prompt("Nhập vào số n", "0");

if (parseInt(n) % 2 == 0 ){
    console.log("Số vừa nhập n là số chẵn");
    console.log(`${n} la so chan`);
}
else {
    console.log("Số vừa nhập n là số lẻ");
    console.log(`${n} la so le`);
}
*/

//cách 2 kiểm tra số cuối của dãy số
// Buoc 1: convert number => string

const number = 123; //123 => '123'
const strOne = number + ''; 
const strTwo = `${number}`

// Buoc 2: Lay ki tu cuoi cung cua chuoi vua roi
const finalCharacter = strTwo.slice(-1)
// Buoc 3: chuyen ki tu cuoi cung vua cat sang number de so sanh

// Buoc 4: Kiem tra 0, 2, 4, 6, 8
if(
    finalCharacter * 1 == 0 || 
    finalCharacter * 1 == 2 || 
    finalCharacter * 1 == 4 || 
    finalCharacter * 1 == 6 || 
    finalCharacter * 1 == 8) {
        console.log(`${number} la so chan`)

}else{
    console.log(`${number} la so le`)
}

