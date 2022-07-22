/*Bài 3:
-	Input: Một chuỗi gồm nhiều từ với một khoảng trắng duy nhất giữa mỗi từ trong số chúng.
-	Output: Viết tắt tên và trả lại tên viết tắt.
Ví dụ: input: 'George Raymond Richard Martin' => output: 'GRRM'
 */

const s = 'George Raymond Richard Martin'
const arr = s.split(' ')
console.log(arr.reduce((output, cuurent) => output+ cuurent[0], ''))