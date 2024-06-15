document.getElementById('fetchButton').addEventListener('click', fetchCreditCardData);

function fetchCreditCardData() {
    const cardContainer = document.getElementById('cards');
    cardContainer.innerHTML = '<div class="spinner"></div>'; // Show spinner

    fetch('https://fakerapi.it/api/v1/credit_cards?_quantity=2')
        .then(response => response.json())
        .then(data => {
            displayCards(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            cardContainer.innerHTML = '<p class="error">Error fetching data. Please try again.</p>';
        });
}

function displayCards(cards) {
    const cardContainer = document.getElementById('cards');
    cardContainer.innerHTML = ''; // Clear spinner

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <h2>${card.owner}</h2>
            <p><strong>Number:</strong> ${card.number}</p>
            <p><strong>Type:</strong> ${card.type}</p>
            <p><strong>Expiration Date:</strong> ${card.expiration}</p>
        `;

        cardContainer.appendChild(cardElement);
    });
}
