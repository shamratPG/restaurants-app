function fetchData(search, showAll) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    // const url = `https://www.themealdb.com/api/json/v1/1/categories.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(json => loadInitialData(json.meals, showAll))
    // .then(json => {
    //     console.log(json.categories)
    // })

    showSpinner(true);

}

function loadInitialData(data, showAll) {
    if (!showAll) {
        displayInitialCards(data.slice(0, 9));
        showBtn(true);
    }
    else if (showAll) {
        displayInitialCards(data);
        showBtn(false);
    }
    console.log('load initial data')
}

fetchData('a', false);