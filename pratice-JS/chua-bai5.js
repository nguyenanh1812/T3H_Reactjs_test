const data = [
  {
    id: 1,
    name: "JavaScript",
    imgPath: "https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 419,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],


  },
  {
    id: 2,
    name: "React JS",
    imgPath: "https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 519,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],


  },
  {
    id: 3,
    name: "Mock Interview",
    imgPath: "https://www.how2become.com/wp-content/uploads/2018/06/Questions-To-Ask-At-The-End-Of-An-Interview.png",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 519,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],
  },
]

const allCoursesDiv = document.querySelector('#allCourses')

//hiển thị view theo data
function renderView() {
  for (let i of data) {
    const cDiv = document.createElement('div')
    cDiv.innerHTML = `
    <div class="row border border-1 border-primary rounded my-3" id="courses-${i.id}">
      <div class="col-md-6 d-flex align-items-center">
          <div class="col-md-2 justify-content-center d-flex">
              <input type="checkbox" name="checkbox" id="checkbox-${i.id}" onclick="myChecked(${i.id})">
          </div>
          <div class="col-md-3">
              <img id="img"
                  src="${i.imgPath}" />
          </div>
          <div class="col-md-7 py-5 px-5">
              <h2>${i.name}</h2>
              <span>${i.name} 365</span>
              <select name="select" id="selectCourse-${i.id}" class="w-100" onchange="getOption(${i.id})">
              ${i.opt.map(({ name, value, price, priceDiscount, percentDiscount }) => `<option value= ${value} >${name} </option>`)}      
              </select>
          </div>
      </div>
      <div class="col-md-6 d-flex py-5 px-5 justify-content-between">
          <div class="col-md-5">
              <p>$ ${i.opt[0].price}</p>
              <span>(${i.opt[0].percentDiscount} %)</span>
              <br />
              <span>$ ${i.opt[0].priceDiscount}</span>
          </div>
          <div class="col-md-5">
              <p>- $ ${i.opt[0].price - i.opt[0].priceDiscount}</p>
          </div>
      </div>
    </div>`
    allCoursesDiv.append(cDiv)
  }
}renderView()

//Chọn select đổi giá tiền
function getOption(id) {
  const selected = document.getElementById(`selectCourse-${id}`)
  const courseDiv = document.getElementById(`courses-${id}`)
  console.log(courseDiv)
  console.log(selected)

}

// Tính tổng tiền

function myChecked(id)
 {
   const a = document.querySelector(`#checkbox-${id}`)
   const b = document.querySelector(`#courses-${id}`)
   console.log(a)
   console.log(b)

 }
