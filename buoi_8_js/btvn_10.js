// Sử dụng cấu trúc mảng sẽ gán 2 phần tử đầu tiên cho biến firstColor và secondColor và gán các phần tử còn lại cho biến otherColors. Hiển thị giá trị của 3 biến này.
// Data test:
let colors = ["white", "blue", "yellow", "black", "red", "green"];

function obj(a) {
    let b = []
    b.push({
        "firstColor": a[0],
        "secondColor":  a[1],
        "otherColors": a.slice(2)
    })
    return b
}
console.log(obj(colors))
