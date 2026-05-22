
        async function connexion() {
            fetch("user.json")
                .then((response) => response.json())
                .then((data) => {
                    const email = document.getElementById("email");
                    const motDePasse = document.getElementById("px");
                    const loginButton = document.getElementById("loginbutton");

                    loginButton.addEventListener("click", (event) => {
                        event.preventDefault();
                        const user = data.find(
                            (user) =>
                                user.email === email.value &&
                                user.mot_de_passe === motDePasse.value
                        );
                        if (user) {
                            alert("Connexion réussie !");
                        } else {
                            alert("Email ou mot de passe incorrect.");
                        }
                    });
                })
                .catch((error) => console.error("Erreur:", error));
        }

        connexion();