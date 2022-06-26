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

objAddress.forEach((addr, index, objAddress)=> {
    console.log(addr.address + "," + addr.district + "," + addr.province + "," + addr.city)
}) 
