/*Bài 4:
url: https://jsonplaceholder.typicode.com/users
Tạo ra 1 thẻ input: 
-	Yêu cầu: Khi gõ id là 1, 2 … vào ô input rồi ấn Enter thì sẽ trả ra dữ liệu của user có id vừa nhập vào ô input
-	Dữ liệu đầu ra sẽ có định dạng như sau:
	Ví dụ: Nếu gõ vào 1 thì sẽ trả ra dữ liệu của user có id là 1
	Và thứ 2 là hãy tạo ra 1 card (html, css) chứa thông tin của user gồm: 
Name: name + username
Email: email
Address: street + suite + city
Phone: phone
Website: website
Company: name of comapy
	Dạng card này sẽ là free style ai làm đẹp sẽ được điểm cao nhé với đầy đủ nội dung như trên
 */

const bodyDiv = document.querySelector('.list-users')
async function getApi() {
    let listUsers = []
    await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    .then(users => {
        listUsers = users
    });

    listUsers.forEach(user => {
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
            <div class="card" style="width: 20rem;">
                <img src="https://www.nicepng.com/png/detail/67-675501_banner-library-male-computer-user-big-image-png.png" class="card-img-top" alt="user" >
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p>Address: ${user.address.street} - ${user.address.suite} - ${user.address.city}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">Phone Number: ${user.phone}</li>
                </ul>
                <div class="card-body">
                    <p>Company: ${user.company.name}</p>
                    <a href="#" class="card-link">${user.website}</a>
                </div>
            </div>
            `
        bodyDiv.append(userDiv)
    });

    document.getElementById("search-input").addEventListener('keypress',  function(){
        const searchText = document.getElementById("search-input").value
        for(let user of listUsers){
            if(searchText == user.id){
                bodyDiv.innerHTML = `
                    <div class="card" style="width: 30rem; height: 45rem">
                        <img src="https://www.nicepng.com/png/detail/67-675501_banner-library-male-computer-user-big-image-png.png" class="card-img-top" alt="user" >
                        <div class="card-body">
                            <h5 class="card-title">${user.name} ${user.username}</h5>
                            <p>Address: ${user.address.street} - ${user.address.suite} - ${user.address.city}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Email: ${user.email}</li>
                            <li class="list-group-item">Phone Number: ${user.phone}</li>
                        </ul>
                        <div class="card-body">
                            <p>Company: ${user.company.name}</p>
                            <a href="#" class="card-link">${user.website}</a>
                        </div>
                    </div>`
                document.getElementById("search-input").value = ''
            }
        }
    })


    // function search(){
    //     const searchText = document.getElementById("search-input").value
    //     for(let user of listUsers){
    //         if(searchText == user.id){
    //             bodyDiv.innerHTML = `
    //                 <div class="card" style="width: 30rem; height: 45rem">
    //                     <img src="https://www.nicepng.com/png/detail/67-675501_banner-library-male-computer-user-big-image-png.png" class="card-img-top" alt="user" >
    //                     <div class="card-body">
    //                         <h5 class="card-title">${user.name}</h5>
    //                         <p>Address: ${user.address.street} - ${user.address.suite} - ${user.address.city}</p>
    //                     </div>
    //                     <ul class="list-group list-group-flush">
    //                         <li class="list-group-item">Email: ${user.email}</li>
    //                         <li class="list-group-item">Phone Number: ${user.phone}</li>
    //                     </ul>
    //                     <div class="card-body">
    //                         <p>Company: ${user.company.name}</p>
    //                         <a href="#" class="card-link">${user.website}</a>
    //                     </div>
    //                 </div>`
    //             document.getElementById("search-input").value = ''
    //         }
    //     }
    // }
    // const btnSearch = document.getElementById('btnSearch')
    // btnSearch.addEventListener('click', search())

} getApi()




