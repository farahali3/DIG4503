//create variable
const axios = require("axios");

//fetch url
axios('https://pokeapi.co/api/v2/pokemon/dratini')
    // add the then to show success
    .then(function (response) {
        //use our data
        const pokemon = response.data;
        // what the response will show if it works
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    
    // use catch for failed
    .catch(function(error){
        // the error
        console.log("Error: " + error);
    })
