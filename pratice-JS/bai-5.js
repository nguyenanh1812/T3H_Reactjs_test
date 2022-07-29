const data = [
    {
      name: "JavaScript",
      opt: [
        {
          name: "30 days",
          value: 30,
          price: 319,
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
      course: "day",
    },
    {
      name: "JavaScript",
      opt: [
        {
          name: "30 days",
          value: 30,
          price: 319,
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
      course: "day",
    },
    {
      name: "ReactJS",
      opt: [
        {
          name: "1 Sessions",
          value: 1,
          price: 799,
          priceDiscount: 499,
          percentDiscount: 38,
        },
        {
          name: "3 Sessions",
          value: 3,
          price: 2099,
          priceDiscount: 1299,
          percentDiscount: 38,
        },
        {
          name: "5 Sessions",
          value: 5,
          price: 3299,
          priceDiscount: 1999,
          percentDiscount: 39,
        },
      ],
      course: "session",
    },
    {
      name: "MOCK INTERVIEWS",
      opt: [
        {
          name: "1 Sessions",
          value: 1,
          price: 2099,
          priceDiscount: 1299,
          percentDiscount: 38,
        },
        {
          name: "3 Sessions",
          value: 3,
          price: 2099,
          priceDiscount: 1299,
          percentDiscount: 38,
        },
        {
          name: "3 Sessions",
          value: 3,
          price: 2099,
          priceDiscount: 1299,
          percentDiscount: 38,
        },
      ],
      course: "session",
    },
  ];


const allCoursesDiv =  document.querySelector('.allCourses')
for(let i of data) {
    const cDiv = document.createElement('div')
    cDiv.innerHTML = `
        <div class="course">
            <img src="" alt="ảnh javascript">
            <select name="" id="">
                <option value="">${i.name}</option>
            </select>
            <div>money</div>
            <div>discount</div>
        </div>`
    allCoursesDiv.append(cDiv)
}

