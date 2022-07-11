/*Bài 1: 
-	Input: Cho vào chuỗi bất kì
-	Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, I, o, u) */

//Bài làm

function countVowels(str) {
    //Chuyển chuỗi sang chữ thường và khai báo biến đếm
    const strTwo = str.toLowerCase()//.split('')
    let count = 0
    //sử dụng vòng lặp for of kiểm tra từng giá trị ký tự trong chuỗi xem có phải nguyên âm ko
    for (let i of strTwo) {
        if (["a", "e", "i", "o", "u"].includes(i)) {
            count++
        }
    }
    // console.log(count)
    return count
}
// Gọi hàm đếm nguyên âm countVowels và truyền cho nó tham số
console.log(countVowels("anh em anh em eiu  iouioU =13"))
console.log(countVowels("aeiuo = 5"))
console.log(countVowels("kbcsd ddddc= 0"))