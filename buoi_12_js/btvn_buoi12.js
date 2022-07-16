const tableDiv = document.querySelector('table')
const btnSearch = document.getElementById("btnSearch")
let listUsers = []
let listSearch = []

async function getApi() {
    await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(users => {
            listUsers = users
        });

    // console.log(listUsers)
    render(listUsers)
    search(listUsers)
} getApi()

function render(array) {
    array.forEach(({ id, name, email, phone, company, website }, index) => {
        const userRow = document.createElement('tr')
        userRow.setAttribute('id', `user-${index}`)
        userRow.setAttribute('class', `listUsersData`)
        userRow.innerHTML = `       
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${company.name}</td>
                <td>${website}</td>
            `
        tableDiv.append(userRow)
    });
}

function hideOldUsers() {
    for (let i in listUsers) {
        const user = document.getElementById(`user-${i}`)
        if (user) {
            user.style.display = "none"
        }
        for (let j in listSearch) {
            if (listUsers[i] == listSearch[j] && user) {
                user.style.display = " table-row"
            }
        }
    }
}

function search(listUsers) {
    btnSearch.addEventListener('click', function () {
        const selectTypeSearch = document.getElementById("select-type-search").value
        const searchText = document.getElementById("search-input").value.toLocaleLowerCase()
        if (selectTypeSearch == "name") {
            // const listUsersName = listUsers.filter(({ name }) => name.toLocaleLowerCase().includes(searchText))
            // console.log(listUsers)
            // render(listUsersName)

            //listSearch = listUsers.filter(({ selectTypeSearch }) => selectTypeSearch.toLocaleLowerCase().includes(searchText))
            listSearch = listUsers.filter(({ name }) => name.toLocaleLowerCase().includes(searchText))
            console.log(listSearch)
        }
        else if (selectTypeSearch == "phone") {
            listSearch = listUsers.filter(({ phone }) => phone.toLocaleLowerCase().includes(searchText))
        }
        else if (selectTypeSearch == "email") {
            listSearch = listUsers.filter(({ email }) => email.toLocaleLowerCase().includes(searchText))
        }
        else if (selectTypeSearch == "company") {
            listSearch = listUsers.filter(({ company }) => company.name.toLocaleLowerCase().includes(searchText))
        }
        hideOldUsers()
    })
}

//Remove Users
document.getElementById('table-users').addEventListener('click', function (event) {
    console.log(event.target.parentNode)
    const rowData = event.target.parentNode
    if (rowData.classList.contains('listUsersData')) {
        const text = "Bạn có chắc chắn muốn xóa dữ liệu người dùng không?"
        if (confirm(text)) {
            rowData.remove()
        }
    }
})


// function removeOldUser() {
//     const e = document.getElementsByClassName('userOld')
//     for(let i in e){
//     //    document.getElementById(`user-${i}`).remove()
//         e[i].remove()
//     }
//     console.log(e)
// }
// function showUsers(a) {
//     for (let i in a) {
//         document.getElementById(`user-${i}`).style.display = "block"
//     }
// }