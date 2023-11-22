//récupérer les données du serveur
fetch('https://tyradex.vercel.app/api/v1/')
.then((response) => response.json())
.then((element) => showPostDetail(element));


function showPostDetail(list){
    list.forEach(element => {
        showPost(element)
    });
}

//affiche Un article dans le site
function showPostDetail(article){

    //récupérer la cible
    let cible = document.getElementById("generation");
   
    //construire le contenue
    let contenue = `
    <article class="Generation">
        <h2>`+Génération+`</h2>
        <h3> `+gen.generation+` </h3>
        <main> `+gen.from+` </main>
        <footer> article n°`+gen.to+` </footer>
    </article>
    `;
   //ajouter le contenue dans la cible
       cible.innerHTML=cible.innerHTML+contenue;
       
   }