// récupérer les données du serveur pour les Pokémon
fetch('https://tyradex.vercel.app/api/v1/pokemon')
    .then((response) => response.json())
    .then((data) => showRandomPokemon(data));

function showRandomPokemon(data) {
    // Générer un indice aléatoire pour choisir un Pokémon
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomPokemon = data[randomIndex];

    // Mettre à jour les éléments HTML avec les informations du Pokémon aléatoire
    const pokemonNameElement = document.getElementById('pokemon-name');
    const pokemonTypeElement = document.getElementById('pokemon-type');
    const pokemonTypeImageElement = document.getElementById('pokemon-type-image');
    const pokemonImageElement = document.getElementById('pokemon-image');
    const pokemonGenerationElement = document.getElementById('pokemon-generation');
    const pokemonPrevEvolutionElement = document.getElementById('pokemon-prev-evolution');
    const pokemonNextEvolutionElement = document.getElementById('pokemon-next-evolution');

    pokemonNameElement.textContent = `Nom: ${randomPokemon.name.fr}`;
    pokemonTypeElement.textContent = `Type: ${randomPokemon.types.map(type => type.name).join(', ')}`;
    pokemonTypeImageElement.src = `${randomPokemon.types.map(type => type.image).join(', ')}`
    pokemonImageElement.src = `${randomPokemon.sprites.regular}`;
    pokemonGenerationElement.textContent = `Génération: ${randomPokemon.generation}`;

    if (randomPokemon.prevEvolution && randomPokemon.prevEvolution.name) {
        pokemonPrevEvolutionElement.textContent = `Évolution précédente: ${randomPokemon.prevEvolution.name}`;
    } else {
        pokemonPrevEvolutionElement.textContent = "Pas d'évolution précédente";
    }

    if (randomPokemon.nextEvolution) {
        pokemonNextEvolutionElement.textContent = `Évolution suivante: ${randomPokemon.nextEvolution}`;
    } else {
        pokemonNextEvolutionElement.textContent = "Pas d'évolution suivante";
    }
}
