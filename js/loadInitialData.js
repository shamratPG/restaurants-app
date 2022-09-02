function fetchData(showAll) {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(json => loadInitialData(json.meals, showAll))

    showSpinner(true);

}

function loadInitialData(data, showAll) {
    console.log(data)
    if (!showAll && data.length > 9) {
        displayInitialCards(data.slice(0, 9));
        showBtn(true);
        console.log('show all false')
    }
    else if (showAll) {
        displayInitialCards(data);
        showBtn(false)
    }
}

fetchData(false);