//récupérer les données du serveur
fetch('https://tyradex.vercel.app/api/v1/gen')
.then((response) => response.json())
.then((data) => showPostDetail(data));


function showPostDetail(list){
    list.forEach(article => {
        showPost(article)
    });
}

//affiche Un article dans le site
function showPost(article){

    //récupérer la cible
    let cible = document.getElementById("generation");
   
    //construire le contenue
    let contenue = `
    <article class="Generation">
        <h2>Génération</h2>
        <h3> `+article.generation+` </h3>
        <main> `+article.from+` </main>
        <footer> `+article.to+` </footer>
    </article>
    `;
   //ajouter le contenue dans la cible
       cible.innerHTML=cible.innerHTML+contenue;
       
   }
