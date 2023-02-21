var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


//id larger than 99
function largerThan99() {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].id > 99) {
            console.log(pokemon[i].name);
        }
    }
}




//console.log the pokémon objects whose id is evenly divisible by 3
function divisibleBy3() {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].id % 3 === 0) {
            console.log(pokemon[i].name);
        }
    }
}






//console.log the pokémon objects that have more than one type
function moreThanOneType() {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].types.length > 1)    {
            console.log(pokemon[i].name);
        }
    }
}



//console.log the names of the pokémon whose only type is "poison"
function poisonType() {
    for(var i=0; i<pokemon.length; i++) {
        for(var x=0; x<pokemon[i].types.length; x++){
            if(pokemon[i].types[x] == "poison")   {
                console.log(pokemon[i].name)
            }
        }
    }
}

function poisonTypeCorrect() {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].types == "poison")   {
            console.log(pokemon[i].name)
        }
    }
}




//console.log the first type of all the pokémon whose second type is "flying"
function flyingType() {
    for(var i=0; i<pokemon.length; i++) {
        for(var x=0; x<pokemon[i].types.length; x++){
            if(pokemon[i].types[x] === "flying")   {
                console.log(pokemon[i].types[0])
            }
        }
    }
}

//without second for loop, made by Spencer
function flyingType2() {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].types[1] === "flying"){
            console.log(pokemon[i].types[0])
            }
        }
    }




// console.log the reverse of the names of the pokémon whose only type is "poison"
function reversePoison() {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].types == "poison")   {
            var reverseName = [];
            var j = pokemon[i].name.length;
            var n = 0;
            while (n<j/2)   {
                var temp = pokemon[i].name;
            }
        }
    }
}


function reverse(arr) {
    var x = arr.length-1;
    var i = 0;
    while (i<arr.length/2)  {
        var temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
        i++;
        x--;
    }
    return arr
}
   
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//Mike Novelle's function
function reversePoisonName()    {
    for(var i=0; i<pokemon.length; i++) {
        if(pokemon[i].types[0]=="poison"&&pokemon[i].types.length==1)   {
            var newString="";
            var randString=pokemon[i].name;
            for(var j=randString.length-1; j>=0; j--)   {
                newString+=randString[j]
            }
            console.log(newString)
        }
    }
}
