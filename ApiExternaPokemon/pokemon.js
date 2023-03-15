class Pokemon {
  constructor(name) {
    this.name = name;
  }
}

async function getPokemon() {
  
  let name = document.getElementById("name").value;
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  let param = {
    headers: { "Content-type": "application/json; charset = UTF-8" },
    method: "GET",
  };
  fetch(url, param)
    .then(function (data) {
      // console.log(data);
      return data.json();
    })
    .then(function (result) {
      if (!result.error) {
        let namePokemon = document.getElementById("pokemonName");
        let pokemonPhoto = document.getElementById("pokemonImage");
        let pokemonAbilities = document.getElementById("abilitiesTable");
        namePokemon.innerHTML = `<p>${result.name}</p>`;
        pokemonPhoto.innerHTML = `<img src = "${result.sprites.other.home.front_default}"></img>`;
        pokemonAbilities.innerHTML = "";
        for (let i =0; i<result.abilities.length; i++){
          console.log(result.abilities[i].ability.name);
          let row = document.createElement("tr");
          row.textContent = result.abilities[i].ability.name;
          pokemonAbilities.appendChild(row);

        }

        console.log(result);
      }else{
        alert("Please, make sure the Pokemon name is typed correctly ")
      }
    })
    .catch(function(error){
        console.log(error);
    })
}


