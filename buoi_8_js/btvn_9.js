// Mọi người hãy sử dụng html, css để làm 1 card về bài viết có tên tác giả (name), title, description nhé.
// Nếu description mà dài quá 50 kí tự thì hiển thị chữ read more. Người dùng ấn vào chữ read more sẽ show full cả description ra đồng thời xuất hiện nút read less. 
// Ấn vào read less sẽ chỉ hiển thị 50 từ thôi.
// Mọi người đọc thêm về dom để làm bài tập này nhé

const articles = [
  {
    name: "Neuer",
    title: "Học Javascript như thế nào",
    description: `
      mô tả của JS.
      An array of odd numbers.
      An array of numbers divisible by 2 or 5.
      An array of numbers divisible by 3 and then squared those numbers.
      The sum of the following: square the numbers divisible by 5.
      `
  },
  {
    name: "Neuer Goretzka",
    title: "Học React như thế nào",
    description: `
      Đây là mô tả của react.
      An array of odd numbers.
      An array of numbers divisible by 2 or 5.
      An array of numbers divisible by 3 and then squared those numbers.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.`
  },
  {
    name: "Goretzka Neuer",
    title: "Làm thế nào để trở lên tốt hơn",
    description: `
      Mô tả của Bài viết 3.<br>
      An array of odd numbers.
      An array of numbers divisible by 2 or 5.
      An array of numbers divisible by 3 and then squared those numbers.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.
      The sum of the following: square the numbers divisible by 5.`
  },
  {
    name: "Sozz",
    title: "HIHIHIHI",
    description: `
    Versrap:
    Yeah ! Anh, ngồi, đây nhìn đêm dài, qua
    3 giờ, em chờ, phone người ta
    Em luôn thế, luôn nghĩ, anh là người khiến em phải đau
    Anh chưa từng, giải thích, chưa một lần muốn ta cãi nhau
    Những chiều thu man mác sầu 
    Vẫn anh trong căn gác nhỏ 
    Ngân nga đôi câu hát đó 
    Về những nỗi buồn không đáng có
    Tháng năm bên cạnh nhau 
    Dễ dàng buông lời xa vời 
    Nước mắt ai vội lau đành thôi nhìn em vội trao người sau `
  },
  {
    name: "Tuan Anh",
    title: "Love U",
    description: `
      Lov U<br>
      Lov 1 
      Lov 2 Làm sao giấu đi đôi mắt nhòe từ ngày em đi ở trong mắt anh
      Chạm từng chút đau thương nén lại càng thêm xót xa ....
      Có khi nào, có khi nào .....
      Ở nơi đâu đó nhìn về quá khứ của hai ta
      Em có tiếc ?`
  },{
    name: "SOOBIN X SLIMV",
    title: "THE PLAYAH",
    description: `
      Mô tả của Bài viết Sobin.<br>
      Chợt nhận ra anh đã đánh mất 
      Tìm lại sao được khi bước chân em xa
      Tháng năm trôi qua nhanh quá
      Giấc mơ kia như tan vỡ 
      Còn mình anh mang những nỗi nhớ
      Một mình anh lạc trong những đêm chơ vơ 
      Biết em đang nơi xa lắm 
      Vẫn mong em bao đêm trắng`
  },
];

// di chuyển script xuống dưới cùng để không cần sử dụng window onload
// window.onload = function () {
//  document.getElementById("name").innerHTML = "Hello JavaScript!"
// }

//Tạo div HTML
for (let i in articles) {
  const post = document.createElement('div')
  post.innerHTML = `<h3 id="name${i}"></h3>
    <h1 id="title${i}"></h1>
    <span id="description${i}"></span>
    <button id="btnReadMore${i}" onclick="readMore(document.getElementById('btnReadMore${i}'), document.getElementById('description${i}'))">Read more</button>`
  document.body.append(post)
  //document.body.prepend(post
  
  document.getElementById(`name${i}`).innerHTML = `<p style=" margin: auto; font-size:10px; float: left">@<p> ${articles[i].name}`   
  document.getElementById(`title${i}`).innerHTML = articles[i].title
  document.getElementById(`description${i}`).innerHTML = articles[i].description.slice(0, 50)
}

// articles.forEach(({ name, description, title }, index, articles) => {
//   console.log(name)
//   console.log(title)
//   console.log(description)
//   console.log(`index${index}`)
//   document.getElementById(`name${index}`).innerHTML = `<p style=" margin: auto; font-size:10px; float: left">@<p> ${name}`
//   document.getElementById(`title${index}`).innerHTML = title
//   document.getElementById(`description${index}`).innerHTML = description.slice(0, 50)
// })

//reade more => full , read less = 50
function readMore(readMorebtn, description) {
  if (readMorebtn.innerHTML === "Read more") {
    readMorebtn.innerHTML = "Read less"
    for (let i of articles) {
      if (i.description.includes(description.innerHTML)) description.innerHTML = i.description; console.log(description.innerHTML)
    }
  } else {
    readMorebtn.innerHTML = "Read more"
    for (let i of articles) {
      if (i.description.includes(description.innerHTML)) description.innerHTML = i.description.slice(0, 50) ; console.log(description.innerHTML)
    }
  }
}

