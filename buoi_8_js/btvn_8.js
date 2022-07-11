// Định dạng địa chỉ ở dạng: address, district, province, city
// -	Hãy cấu trúc dữ liệu để in ra địa chỉ dạng như trên
// -	Hãy viết hàm để in ra địa chỉ dạng trên với dữ liệu đã cấu trúc
let objAddress = [
    {
        "address": "Số 18 đường ABC",
        "district": "Thanh Trì",
        "province": "Hà Nội",
        "city": "Hà Nội"
    }
]

objAddress.forEach(({ address, district, province, city }, index, objAddress) => {
    console.log(`${address}, ${district},  ${province}, ${city}`)
}) 
