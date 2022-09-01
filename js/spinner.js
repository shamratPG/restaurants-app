function showSpinner(loading) {
    const spinner = document.getElementById('spinner');
    // console.log(spinner)
    if (loading === true) {
        // console.log('true')
        spinner.classList.remove('d-none');
    } else if (loading === false) {
        spinner.classList.add('d-none');
        // console.log('false')
    }
}