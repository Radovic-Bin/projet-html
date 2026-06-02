//==========================================================================================
//============================ transfers vers la page de connexion =========================
function page_de_connection() {
    fetch("connection.html")
        .then(response => response.text())
        .then(html => {
            document.addEventListener('click', (event) => {
                if (event.target.id === 'pageconnect') {
                    page_de_connection();
                }
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la page de connexion :', error);
        });
}
//==========================================================================================
//============================ chargement des produits et affichage ========================
 let produits = [];
function chargerproduit() {
  const list = document.querySelector("#produits-container");

  fetch("product.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(post => {
        list.insertAdjacentHTML('beforeend', `
          <div class="carte-produit">
            <img src="images/${post.image}" alt="${post.nom}">
            <div class="carte-info">
              <h3>${post.nom}</h3>
              <h3>${post.categorie}</h3>
              <span class="categorie">${post.categorie}</span>
              <p class="prix">${post.prix} XAF</p>
            </div>
          </div>
        `);
      });
    });
}
chargerproduit();
//==========================================================================================
//==============================barre de recherche=========================================
document.getElementById("recherchenomProduit").addEventListener("input", function() {
    const motclé = this.value.toLowerCase();
    const filtreProducts = produits.filter(product => product.nom.toLowerCase().includes(motclé));
    afficherResultats(filtreProducts);
});

chargerproduit();
