var username = document.querySelector("#username");
var connects = document.querySelector("#connects");
var requests = document.querySelector("#requests");


function editName() {
    console.log("test");
    username.innerText = "Jane Jingleheimerscmidt";
}


function userRemove(div)  {
    div.remove();
    requests.innerText--;
}

function userAdd(div)   {
    div.remove();
    requests.innerText--;
    connects.innerText++;
}