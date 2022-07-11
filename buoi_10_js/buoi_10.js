// Call back function: 
// Promise
// async/await
// settimeout/setinterval
// Event loop, cơ chế của event loop

// Callback Function hay được gọi với tên khác là Higher-order Function, 
// là một function được truyền vào một function (gọi là F1) khác dưới dạng tham số, và được gọi trong function F1 đó
//VD callback function
// function calA(year) {
//     return year - 9;
// }
// function print({ name, age }) {
//     return `gg ${name} ${age} ${calA(age)}`
// }
// function b(c, pr) {
//     return pr(c, calA)
// }
// console.log(b(
//     {
//         name: 'TA',
//         age: '100'
//     }, print))

//KQ: gg TA 100 91

/*
syntax of call back function: function A => gọi function B thông qua đối số truyền
 vào => gọi function C thông qua đối số chuyền vào => gọi function D thông qua đối số chuyền vào ... dừng không gọi nữa
 => Hiện tượng callback hell => callBack hell: cách viết code không clear, khó  cho người đọc code + hiểu code
 => khó trong việc maintain
 -Ý nghĩa: thực thi callback trước, và nó sẽ phải đợi cho thằng call back thực thi xong => trả ra kết quả thì function chứa callback này sẽ  thực hiện hành động với kết quả nhận được
*/
//-----

// JS là ngôn ngữ bất đồng bộ hay bất đồng bộ?
//=> JS là ngôn ngữ đồng bộ nó thực thi câu lệnh theo thứ tự từ trên xuống dưới
// Hàm setTimeout => hàm để xử lý việc không đồng bộ ( bất đồng bộ)
// SetTimeout => đẩy vào web api => xử lý việc bất đồng bộ

// console.log('task1')
// setTimeout(()=>{
//     console.log('xin chao 1')
//     setTimeout(()=>{
//         console.log('xin chào 2')
//     },3000)
// },2000)
// setTimeout(()=>{
//     console.log('xin chào 3')
// },2000)
// console.log('task3')


// (function () {
//     console.log(1)
//     setTimeout(function () { console.log(2) }, 100)
//     setTimeout(function () { console.log(3) }, 0)
//     console.log(4)
// })()


//(function(){ })() //IIFE: Immediately-invoked Function :hàm được gọi ngay
// (() => { })()   //IIFEs
// KQ: 1 4 3 2

// function alogA() {
//     setTimeout(function() {
//         console.log('A');
//     }, 0);
// }

// function alogB() {
//     setTimeout(function() {
//         console.log('B');
// }, 0);
// }

// function alogC() {
//     setTimeout(function() {
//         console.log('C');
// }, 0);
// }
// function alogD() {
//     setTimeout(function() {
//         console.log('D');
// }, 0);
// }

// alogD(alogA(alogB(alogC())))
//KQ: CBAD

//Promise
//Promise sinh ra để giải quyết các thao tác bất đồng bộ, trước khi có promise ta có thể sử dụng callback, nhưng callback sẽ có thể xảy ra callback hell khiến code rất khó hiểu
//=>Giúp viết code không bị callback hell, viết code không bị xâu vào => dễ đọc dễ hiểu hơn
// 3 (state) trạng thái của promise: pending(Tạo lời hứa-chưa giải quyết), 
// Khi thực hiện Hàm resolve(giải quyết lời hứa) thì chuyển sang trạng thái fulfilled(hòa thành) với result :value,
// Nếu từ chối không giữ lời hứa chuyển sang tạng thái reject(và trả về lỗi) value: error
// - promise.then() áp dụng cho resolve
// - promise.catch() áp dụng cho reject để bắt lỗi
// - promise.finally() áp dụng khi có resolve hoặc reject được thực hiện

var promise = new Promise(
    function (resolve, reject) {
        //fake api lấy dữ liệu từ url link
        resolve([
            {
                id: 1,
                name: "tuan anh"
            },
            {
                id: 2,
                name: "anh nt"
            },
        ])

        //reject('Có lỗi rồi')
    }
);
promise
    .then(function (users) {
        console.log(users)
    })
    .then(function(){
        console.log('thành công 2')
        //return 'thành công 3' //return gì thì callback tiếp theo nhận giá trị return, kết quả trả về của func trước sẽ là tham số đầu vào của func đằng sau 
        return new Promise(function(resolve){ //kể cả ta setTimeout
            setTimeout(function(){
                resolve(['thành','công','3'])
            }, 2000)
        })
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function (fail) {
        console.log(fail)
    })
    .finally(function () {
        console.log('Done!')
    });

// Promise.reject() luôn trả về giá trị promise thất bại
// Promise.resolve() luôn trả về giá trị promise thành công
// Promise.all([promise1, promise2]) => chạy song song 2 promise tổng thời gian bằng thời gian set timeout lớn nhất và promise.all sẽ trả về promise => có thể .then hoặc catch...

// -sync: đồng bộ cái gì viết trước chạy trước, viết sau chạy sau
// -async: bất đồng bộ : setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame

//Call api với fetch
// fetch không là một promise
// promise.then để lấy ra kết quả

import fetch from 'node-fetch'
const newResult = fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        return result.json()
    }).then(result => console.log(result))
console.log(newResult)


