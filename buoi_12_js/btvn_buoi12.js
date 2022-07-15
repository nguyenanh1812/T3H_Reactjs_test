const tableDiv = document.querySelector('table')
const btnSearch = document.getElementById("btnSearch")
let listUsers = []

async function getApi() {
    await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(users => {
            listUsers = users
            console.log(listUsers)
            render(listUsers)
            search(listUsers)
        });
} getApi()

function render(array) {
    array.forEach(({ id, name, email, phone, company, website }, index) => {
        const userRow = document.createElement('tr')
        userRow.setAttribute('id', `user-${index}`)
        userRow.setAttribute('class', `usersOld`)
        userRow.innerHTML = `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${company.name}</td>
                <td>${website}</td>
            </tr>
            `
        tableDiv.append(userRow)
    });
}

function removeOldUser() {
    const e = document.getElementsByClassName('userOld')    
    for(let i of e){
        document.getElementById( `user-${i}`).remove()
    }
}

function search(listUsers) {
    btnSearch.addEventListener('click', function () {
        removeOldUser()
        const selectTypeSearch = document.getElementById("select-type-search").value
        const searchText = document.getElementById("search-input").value.toLocaleLowerCase()
        if (selectTypeSearch == "name") {
            const listUsersName = listUsers.filter(({ name }) => name.toLocaleLowerCase().includes(searchText))
            render(listUsersName)
            console.log(listUsersName)
        }
        else if (selectTypeSearch == "phone") {
            const listUsersPhone = listUsers.filter(({ phone }) => phone.toLocaleLowerCase().includes(searchText))
            render(listUsersPhone)
        }
        else if (selectTypeSearch == "email") {
            const listUsersEmail = listUsers.filter(({ email }) => email.toLocaleLowerCase().includes(searchText))
            render(listUsersEmail)
        }
        else if (selectTypeSearch == "company") {
            const listUsersCompany = listUsers.filter(({ company }) => company.name.toLocaleLowerCase().includes(searchText))
            render(listUsersCompany)
        }
        else {
            alert('Không tìm thấy user!!')
            render(listUsers)
        }
    })
}


