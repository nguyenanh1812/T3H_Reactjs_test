const tableDiv = document.getElementById('table-users')
const btnSearch = document.getElementById("btnSearch")
let listUsers = []

async function getApi() {
    await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(users => {
            listUsers = users
            console.log(listUsers)
            render(listUsers)
            removeOldUser()
            search()
        });
} getApi()

function render(array) {
    array.forEach(({ id, name, email, phone, company, website }) => {
        const userRow = document.createElement('tr')
        userRow.innerHTML = `
            <tr class="old-user">
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

function removeOldUser(){
    const oldUser = document.getElementsByClassName(`old-user`)
    while(oldUser.length > 0){
        oldUser[0].remove();
    }
    
}
// function filterUsers(array, inputSelect, inputText){
//     return array.filter(({inputSelect})=> inputSelect.includes(inputText))
// }

function search() {
    btnSearch.addEventListener('click', function () {
        const selectTypeSearch = document.getElementById("select-type-search").value
        const searchText = document.getElementById("search-input").value.toLocaleLowerCase()
        console.log(searchText)
        const ListUsersTwo = listUsers.filter(({ name }) => name.toLocaleLowerCase().includes(searchText))
        console.log(ListUsersTwo)
        // tableDiv.remove()
        // const table = document.createElement('table')
        // document.body.append(table)
        render(ListUsersTwo)
    })
}


