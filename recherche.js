function searchPokemon() {
  const searchInput = document.getElementById('searchInput');
  const searchResultsSection = document.getElementById('searchResults');
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm === '') {
      searchResultsSection.innerHTML = '<p>Veuillez entrer un nom de Pokémon.</p>';
      return;
  }

  // Effectuez la recherche sur le serveur en utilisant le terme de recherche
  fetch(`https://tyradex.vercel.app/api/v1/pokemon?name=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => displaySearchResults(data));
}

function displaySearchResults(results) {
  const searchResultsSection = document.getElementById('searchResults');
  searchResultsSection.innerHTML = ''; // Réinitialise les résultats précédents

  if (results.length === 0) {
      searchResultsSection.innerHTML = '<p>Aucun Pokémon trouvé.</p>';
      return;
  }

  results.forEach(pokemon => {
      const resultItem = document.createElement('div');
      resultItem.innerHTML = `
          <h3>${pokemon.name.fr}</h3>
          <img src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}">
          <p>Type: ${pokemon.types.map(type => type.name).join(', ')}</p>
          <p>Génération: ${pokemon.generation}</p>
          <!-- Ajoutez d'autres détails du Pokémon selon vos besoins -->
      `;
      searchResultsSection.appendChild(resultItem);
  });
}