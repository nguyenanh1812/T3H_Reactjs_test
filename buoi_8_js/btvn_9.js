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
];

// di chuyển script xuống dưới cùng để không cần sử dụng window onload
// window.onload = function () {
//  document.getElementById("name").innerHTML = "Hello JavaScript!"
// }

articles.forEach((article, index, articles) => {
  console.log(article.name)
  console.log(article.title)
  console.log(article.description)
  console.log(`index${index}`)
  document.getElementById(`name${index}`).innerHTML = articles[index].name
  document.getElementById(`title${index}`).innerHTML = articles[index].title
  document.getElementById(`description${index}`).innerHTML = articles[index].description.slice(0, 50)
})

//reade more => full , read less = 50
function readMorebtn0() {
  document.getElementById(`btnReadMore0`).style.display = "none"
  document.getElementById(`btnReadLess0`).style.display = "block"
  document.getElementById(`description0`).innerHTML = articles[0].description
}
function readLessbtn0() {
  document.getElementById(`btnReadLess0`).style.display = "none"
  document.getElementById(`btnReadMore0`).style.display = "inline-block"
  document.getElementById(`description0`).innerHTML = articles[0].description.slice(0, 50)
}

function readMorebtn1() {
  document.getElementById(`btnReadMore1`).style.display = "none"
  document.getElementById(`btnReadLess1`).style.display = "block"
  document.getElementById(`description1`).innerHTML = articles[0].description
}
function readLessbtn1() {
  document.getElementById(`btnReadLess1`).style.display = "none"
  document.getElementById(`btnReadMore1`).style.display = "inline-block"
  document.getElementById(`description1`).innerHTML = articles[0].description.slice(0, 50)
}

function readMorebtn2() {
  document.getElementById(`btnReadMore2`).style.display = "none"
  document.getElementById(`btnReadLess2`).style.display = "block"
  document.getElementById(`description2`).innerHTML = articles[0].description
}
function readLessbtn2() {
  document.getElementById(`btnReadLess2`).style.display = "none"
  document.getElementById(`btnReadMore2`).style.display = "inline-block"
  document.getElementById(`description2`).innerHTML = articles[0].description.slice(0, 50)
}