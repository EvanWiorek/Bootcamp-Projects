
// function getUsers(){
//     fetch('http://localhost:5000/users')
//         .then(res =>  res.json())
//         .then(data => {
//             var users = document.getElementById('users');
//             for( let i = 0; i < data.length; i++){
//                 let row = document.createElement('tr');

//                 let name = document.createElement('td');
//                 name.innerHTML = data[i].user_name;
//                 row.appendChild(name);
                
//                 let email = document.createElement('td');
//                 email.innerHTML = data[i].email;
//                 row.appendChild(email);
//                 users.appendChild(row);
//             }
//         })
// }

async function loadUsers(element) {
    let url = "http://localhost:5000/users";
    let settings = {
        method : "GET"
    };
    let response = await fetch(url, settings)
    let data = await response.json()
    let usersTableData = document.getElementById("users");
    usersTableData.innerHTML = "";
    for (let i = 0; i<data.length; i++) {
        usersTableData.innerHTML +=
        `
        <tr id="user_${data[i].id}">
            <td>${data[i].user_name}</td>
            <td>${data[i].email}</td>
            <td><button onclick="deleteUser(${data[i].id})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
}

async function addNewUser(event) {
    event.preventDefault();
    let url = "http://localhost:5000/create/user";
    let data = {
        user_name : document.getElementById("user_name").value,
        email : document.getElementById("email").value
    }
    let settings = {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    }
    let response = await fetch(url, settings)
    let responseData = await response.json()
    console.log(responseData)
}

async function deleteUser(userId) {
    let url = `http://localhost:5000/delete/user/${userId}`
    let settings = {
        method : "DELETE"
    };
    let response = await fetch(url, settings)
    console.log(response)
    document.getElementById(`user_${userId}`).remove()
}
