function buttonLogout(element) {
    if(element.innerText == "Logout")   {
        element.innerText = "Login";
    }
    element.innerText = "Logout";
}

function buttonRemove(element)  {
    element.remove();
}