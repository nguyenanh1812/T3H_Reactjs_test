/*Bài 3: Yêu cầu: Viết function tính tổng 
- input: 1 array có chứa số và các mảng con
- output: Tính tổng tất cả các phần tử dựa vào depth của mảng

ví dụ: [x, [y, z]]thì mảng [y, z] sẽ có độ sâu là 2
=> nên tổng của mảng này là: x + 2*(y + z)

=> công thức tính sẽ là: (mảng nested trong mảng)

các phần tử mảng ngoài + độ sâu của mảng nested*(tổng các phần tử trong mảng nested)

ví dụ tiếp: array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
sum array = 5 + 2 + 2*(7 + (-1)) + 3 + 2*(6 + 3*(-13 + 8) + 4) = 12  */


const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

function sum(array){
    let sum = 0 
    array.forEach(element => {
        sum += element
    });
    console.log(sum)
}
sum(array)