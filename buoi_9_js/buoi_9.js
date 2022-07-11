//hoisting không dùng cho let và const (có thể dùng được cho var, function), phần khai báo chỉ được chuyển lên trên top của hàm 
//var phạm vi là global scope (phạm vi toàn cục)

//Lexical Scope function trong function, function con có thể sử dụng biến của func ngoài
<<<<<<< HEAD
//Closure scope làm cho scope của ta không thể tiếp cận được public scope. Chỉ gọi function sẽ không thực hiện gì bởi nó trả về kết quả là tham chiếu tới function
=======
//Closure Là hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được các biến ở bên ngoài phạm vi của nó

// VÍ dụ Lưu ý
var sayHello = function (name) {
  var text = 'Hello, ' + name;
  return function () { // làm cho scope của ta không thể tiếp cận được public scope. Chỉ gọi function sẽ không thực hiện gì bởi nó trả về kết quả là tham chiếu tới function
    console.log(text);
  };
};
//Để method hoạt động ta cần gán nó vào biến rồi mới thực thi:
var helloMethod = sayHello('Duy');
helloMethod(); // Hello Duy
>>>>>>> 160782f (huhuh)


//---
//higher order function là 1 func nhận đầu vào là 1 func =>  return 1 func nào đó

//higher order component => component => component => HoC ReactJS
//IIFE
