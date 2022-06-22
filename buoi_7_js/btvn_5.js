/*Bài 5:
-	Input: Cho 1 chuỗi
-	Output: In ra chuỗi đảo ngược  */

// Bài giải

function reverse(str){
    let strReverse = ""
    for(let i = 0;i < str.length; i++ ){
        strReverse += str[str.length-i-1]
        //console.log(str[str.length-i-1])
    }
    console.log(strReverse)
}
reverse("NguyenTuanAnh-anhnt")
reverse("huhuhuhu")
reverse("12345")