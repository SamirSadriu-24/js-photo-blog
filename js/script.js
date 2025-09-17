
// setto l'url così
url = "https://lanciweb.github.io/demo/api/pictures/";

// uso fetch per prendere i dati
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log("dati:", data);

        // prendo i dati e li setto così in modo che poi io possa riusarli
        for (i = 0; i < data.length; i++) {
            console.log("Elemento:", data[i]);
            console.log("Titolo:", data[i].title);
            console.log("Data:", data[i].date);
            console.log("immage:", data[i].url);

            // faccio in modo che crei una card nel mio html
            const card = document.createElement("div");
            card.classList.add("card");

            // e anche l'elemento pin
            const pin = document.createElement("div");
            pin.setAttribute("id", "pin");

            //setto gli elementi interni della card 
            card.innerHTML = `
                <div class="pin"></div>
                <img src="${data[i].url}" alt="${data[i].title}" />
                <h3>${data[i].title}</h3>
                <p>${data[i].date}</p>
            `;

            // e collego la card al suo container che prendo dal mio html
            const cardContainerHtml = document.getElementById("card_container")
            cardContainerHtml.appendChild(card);
        }


    });


