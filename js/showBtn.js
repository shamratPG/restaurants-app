function showBtn(data) {
    const viewBtn = document.getElementById('view-btn');
    if (data) {
        viewBtn.classList.remove('d-none')
    } else if (!data) {
        viewBtn.classList.add('d-none')
    }
}
