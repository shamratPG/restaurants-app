function displayInitialCards(data) {
    const cardsContainer = document.getElementById('cards-container');
    data.forEach(element => {
        console.log(element)
        const card = document.createElement('div');
        card.classList.add('col')
        card.innerHTML = `
        <div class="card">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${element.strMeal}</h5>
                    <p>Food Catagory: <a class="text-primary text-decoration-none" href="#">${element.strCategory}</a></p>
                    <p>Area: <a class="text-primary text-decoration-none" href="#">${element.strArea}</a>
                    </p>
                <button onclick="showDetails()" class="btn btn-primary">Details</button>
            </div>
        </div>
        `;
        cardsContainer.appendChild(card);
    });
}