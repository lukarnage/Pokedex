// récupérer les données du serveur pour les types
fetch('https://tyradex.vercel.app/api/v1/types')
.then((response) => response.json())
.then((data) => showTypes(data));

function showTypes(list) {
let typeSection = document.getElementById("type");

list.forEach(type => {
let button = document.createElement("button");
button.textContent = "Type " + type.name.fr;
button.addEventListener("click", () => showPokemonList(type.id));
typeSection.appendChild(button);
});
}

function showPokemonList(type) {
fetch(`https://tyradex.vercel.app/api/v1/types/${type}`)
.then((response) => response.json())
.then((data) => displayPokemonList(data));
}

function displayPokemonList(pokemonList) {
    let listeTypeSection = document.getElementById("listeType");
    listeTypeSection.innerHTML = ""; // Efface le contenu précédent

    // Vérifiez la structure des données renvoyées par l'API
    if (pokemonList.pokemons) {
        pokemonList.pokemons.forEach(pokemon => {
            let content = `
                <article class="Pokemon">
                    <h2>${pokemon.name.fr}</h2>
                    <img src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}"/>
                    <p>${pokemon.types.map(type => {
                        // Affiche le nom du type et l'image associée
                        return `<img src="${type.image}" alt="${type.name}"/>`;
                    }).join(' ')}</p>
                    <!-- Ajoutez d'autres détails du Pokémon selon vos besoins -->
                </article>
            `;
            listeTypeSection.innerHTML += content;
        });
    } else {
        console.error("Structure de données invalide.");
    }
}