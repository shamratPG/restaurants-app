function loadInitialData() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(json => displayInitialCards(json.meals))
}

loadInitialData();