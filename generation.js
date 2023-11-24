// récupérer les données du serveur pour les générations
fetch('https://tyradex.vercel.app/api/v1/gen')
    .then((response) => response.json())
    .then((data) => showGenerations(data));

function showGenerations(list) {
    let generationSection = document.getElementById("generation");

    list.forEach(generation => {
        let button = document.createElement("button");
        button.textContent = "GÉNÉRATIONS" + generation.generation;
        button.addEventListener("click", () => showPokemonList(generation.generation));
        generationSection.appendChild(button);
    });
}

function showPokemonList(generation) {
    fetch(`https://tyradex.vercel.app/api/v1/gen/${generation}`)
        .then((response) => response.json())
        .then((data) => displayPokemonList(data));
}

function displayPokemonList(pokemonList) {
    let listeGenSection = document.getElementById("listeGen");
    listeGenSection.innerHTML = ""; // Efface le contenu précédent

    pokemonList.forEach(pokemon => {
        let content = `
            <article class="Pokemon" onclick="showPokemonDetails(${pokemon.id})">
                <h2>${pokemon.name.fr}</h2>
                <img src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}"/>
                <p>${pokemon.types.map(type => {
                    // Affiche le nom du type et l'image associée
                    return `<img src="${type.image}" alt="${type.name}"/>`;
                }).join(' ')}</p>
                <!-- Ajoutez d'autres détails du Pokémon selon vos besoins -->
            </article>
        `;
        listeGenSection.innerHTML += content;
    });
}