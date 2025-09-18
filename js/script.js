
// setto l'url così
url = "https://lanciweb.github.io/demo/api/pictures/";

// qui invece ho creato all'inizio la card così che dopo possa prenderla.
const centralCard = document.createElement("div");
centralCard.classList.add("centralCard");
document.body.appendChild(centralCard);
centralCard.style.display = "none";

// uso fetch per prendere i dati
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log("dati:", data);

        // prendo i dati e li setto così in modo che poi io possa riusarli
        for (let i = 0; i < data.length; i++) {
            console.log("Elemento:", data[i]);
            console.log("Titolo:", data[i].title);
            console.log("Data:", data[i].date);
            console.log("immage:", data[i].url);

            // faccio in modo che crei una card nel mio html
            const card = document.createElement("div");
            card.classList.add("card");


            //setto gli elementi interni della card 
            card.innerHTML = `
                <div class="pin"></div>
                <img src="${data[i].url}" alt="${data[i].title}" />
                <h3>${data[i].title}</h3>
                <p>${data[i].date}</p>
            `;

            // creo un altra card al click dell'utente, che si centra al mezzzo e anche il bottone. faccio in modo che l'immagine della card sia la stessa di quella pigiata.
            card.addEventListener("click", () => {
                centralCard.innerHTML = `
                <button id=closeButton>Chiudi<button>
                <img src="${data[i].url}" alt="${data[i].title}" />
            `;
                // qui faccio in modo che cambi la proprietà
                centralCard.style.display = "flex";

                // creo il bottone per chiudere 
                const close = document.getElementById("closeButton");

                // e faccio in modo che torni come prima ovvero none
                close.addEventListener("click", () => {
                    centralCard.style.display = "none";
                });
            });


            // e collego la card al suo container che prendo dal mio html
            const cardContainerHtml = document.getElementById("card_container")
            cardContainerHtml.appendChild(card);



        }
    });



