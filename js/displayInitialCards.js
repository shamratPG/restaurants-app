function displayInitialCards(data) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ``;
    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card card-color shadow pink-text">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title fs-3">${element.strMeal}</h5>
                    <p class ="fs-5 mb-1">Food Catagory: <a class="blue-text text-decoration-none" href="#">${element.strCategory}</a></p>
                    <p class ="fs-5">Area: <a class="blue-text text-decoration-none" href="#">${element.strArea}</a>
                    </p>
                <button onclick="showDetails()" class="default-btn fw-semibold shadow ">Details</button>
            </div>
        </div>
        `;
        cardsContainer.appendChild(card);
    });
    showSpinner(false)
}