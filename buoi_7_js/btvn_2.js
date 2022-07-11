/* Bài 2: 
-	Input: Cho 1 object
-	Output: Viết hàm kiểm tra xem object đó rỗng không */

//Bài làm
//const car = {type:"Fiat", model:"500", color:"white"};
//console.log( Object.keys(car).length) => KQ 3  ( Object.values() tương tự)

function checkObjNone(obj = {}) {
    //Kiểu tra độ dài value của obj nếu rỗng thì sẽ k có value (value=0)
    return Object.values(obj).length === 0
        ? console.log("Object truyền vào là rỗng!")
        : console.log(`Có tồn tại giái trị, Object không rỗng!`)
}
// Gọi hàm truyền vào tham số đối tượng test
checkObjNone({ firstName: "John", lastName: "Doe", id: 5566 })
checkObjNone()