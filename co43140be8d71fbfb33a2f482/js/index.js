/* All the selectors*/
const newEl = document.querySelector('.link')
const viewLess = document.getElementById('view-more')
const moreItems = document.querySelector('.section-two')

/* The boolean for fliping text viewMore and viewLess */
let bool = false;

/* Eventlistener function */
document.addEventListener('click', (e) => {
    if (e.target.dataset.toggle) {
        toggleFunc(e.target.dataset.toggle)
    }
    else if (e.target.id === 'view-more') {
        addMoreImages()
    }
})

/* Toggle callback function */
function toggleFunc() {
    newEl.classList.toggle('links')
}

/* The text message callback function */
function addMoreImages() {
    bool ? viewLess.textContent = 'View-more' : viewLess.textContent = 'View-less'
    bool = !bool
    moreItems.classList.toggle('hidden')

}