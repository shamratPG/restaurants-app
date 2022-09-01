function loadInitialData() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        // .then(json => displayInitialCards(json.meals));
        .then(json => {
            let data
            if (json.meals.length > 10) {
                data = json.meals.slice(0, 9);
                // showAllBtn;
            }
            displayInitialCards(data);
            // console.log(json.meals.length)
        });
    showSpinner(true)
}

loadInitialData();