function searchResult() {
    const searchInput = document.getElementById('search');
    const searchText = searchInput.value;
    fetchData(searchText, true);
}