function search() {
    // Récupérer la valeur du champ de recherche
    var searchTerm = document.getElementById("searchInput").value;

    // Récupérer la valeur du filtre sélectionné
    var filter = document.getElementById("filterSelect").value;

    // Simuler une recherche (remplacez cela par votre logique de recherche réelle)
    var results = performSearch(searchTerm, filter);

    // Afficher les résultats
    displayResults(results);
  }

  function performSearch(term, filter) {
    // Remplacez cette fonction par votre propre logique de recherche
    // Pour l'instant, nous retournons des résultats fictifs
    var fakeData = [
      { name: "", number: "" },
      { name: "", number: "" },
      // Ajoutez d'autres données fictives selon vos besoins
    ];

    return fakeData.filter(function(item) {
      // Filtrer les résultats en fonction du filtre sélectionné
      return item[filter].toLowerCase().includes(term.toLowerCase());
    });
  }

  function displayResults(results) {
    var resultsContainer = document.getElementById("results");

    // Effacer les résultats précédents
    resultsContainer.innerHTML = "";

    // Afficher les nouveaux résultats
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>Aucun Pokémon trouvé</p>";
    } else {
      var ul = document.createElement("ul");
      results.forEach(function(result) {
        var li = document.createElement("li");
        li.textContent = result.name + " - " + result.number;
      });
    }
 }