function elementRemove(element)  {
    element.remove();
}

function upvote(p)   {
    p.innerText++;
}

function downvote(p)   {
    p.innerText--;
}

function searchGo()  {
    var searchBarResult = document.querySelector(".search")
    // console.log(searchBarResult.value);
    alert("Searching for " + searchBarResult.value + "...");
}