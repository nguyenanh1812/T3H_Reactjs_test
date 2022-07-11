// từ user_case thành UserCase

const string = "user_case"

//Dùng slice
/* console.log(string[2])
console.log(string.split("_"))
console.log(string.slice(0,1).toUpperCase())
console.log(string.slice(1,4))
console.log(string.slice(5,6).toUpperCase())
console.log(string.slice(6,9))
console.log(string.slice(0,1).toUpperCase() + string.slice(1,4) + string.slice(5,6).toUpperCase() + string.slice(6,9))*/

//For in nó lấy index 
//For of nó lấy value
/* for(var i in array) */

function toUpperCaseFirst(a)
{
    return a.charAt(0).toUpperCase()+a.slice(1)
}
console.log(toUpperCaseFirst("user"))

function reverse(str) {
    let newStr = ""
    for(let i of str.split("_") ){
        newStr += toUpperCaseFirst(i)
    }   
    
    /*
    const splitStr = str.split("_")
    for( let i = 0; i< splitStr.length; i++ ) {
        newStr += toUpperCaseFirst(splitStr[i].toString())
    } */
    console.log(newStr) 
}
reverse("user_model_dmc")


