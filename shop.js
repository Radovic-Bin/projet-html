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
function chargerproduit() {
    const list = document.querySelector("ul");
    fetch("product.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                list.insertAdjacentHTML('beforeend', `
                    <li>
                        ${post.nom}
                        ${post.prix} XAF
                        ${post.categorie}
                        ${post.image}
                    </li>
                `);
            });
        })
}
chargerproduit();
//==========================================================================================
//==============================filtre de recherche=========================================

