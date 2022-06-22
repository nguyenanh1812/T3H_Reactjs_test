/*Bài 1: 
-	Input: Cho vào chuỗi bất kì
-	Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, I, o, u) */

//Bài làm

function countVowels(str) {
    //Chuyển chuỗi sang chữ thường và khai báo biến đếm
    const strTwo = str.toLowerCase()//.split('')
    let count = 0
    
    //sử dụng vòng lặp for of kiểm tra từng giá trị ký tự trong chuỗi xem có phải nguyên âm ko
    for(let i of strTwo) {
        if (i.includes('a') || i.includes('e') || i.includes('i') || i.includes('o') || i.includes('u')) {
            count ++
        }
    }
    console.log(count)
}

// Gọi hàm đếm nguyên âm countVowels và truyền cho nó tham số
countVowels("anh em anh em eiu  iouioU =13")
countVowels("aeiuo = 5")
countVowels("kbcsd ddddc= 0")