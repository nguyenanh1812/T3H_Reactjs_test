/*Bài 4: 
-	Input: Cho 1 mảng
-	Output: Tìm số lần xuất hiện của các phần tử trong mảng */

//Test shift()
/*const arr = [1,2,3,4,5,6]
let arr2 = arr.shift()
console.log(arr2) // Kết quả 1
console.log(arr)  //Kết quả [2,3,4,5,6] => shift() loại bỏ phần tử đầu của mảng đồng thời thay đổi mảng ban đầu bằng mảng mới không chứa giá trị vừa loại bỏ
//test slice(start, end) cắt không làm thay đổi mảng ban đầu
*/

//Bài giải

//Hàm tính số lần xuất hiện của phần tử x bất kỳ
function countDuplicates(arr, x) {
	let count = 0
	for (let i of arr) {
		if (i === x) {
			count++
		}
	}
	return console.log(`Số lần xuất hiện của phần tử ${x} là ${count} lần`)
}
//Hàm tách mảng của phần tử 
function getEachValue(arr) {
	// Tạo một mảng mới(2) xóa các phần tử trùng nhau trong mảng cũ
	const arrTwo = Array.from(new Set(arr))

	//In mảng muốn kiểm tra và các phần tử của mảng
	console.log(`Mảng cần kiểm tra [${arr}]`)
	console.log(`Mảng trên có các phần tử: "${arrTwo}"`)

	//Tách hết các phần tử có trong mảng 2, dùng slice() để copy mảng 2 sang một mảng khác và khi dùng shift() sẽ không bị ảnh hưởng
	for (let i of arrTwo.slice()) {
		let x = arrTwo.shift()
		//Gọi đến hàm đếm số lần xuất hiện để đếm số lần xuất hiện X
		countDuplicates(arr, x)
	}
	console.log("-------------------------------------")
}
//Goi ham và truyền vào mảng cần kiểm tra
getEachValue([1, 2, 2, 2, 6, 6])
getEachValue(["anh", "em", "ho", "em", "a", "bc"])
getEachValue([23, 59, "huhu", "huhu", "hihi", 0, 5, 34, 23])


