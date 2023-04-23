//----MENU
const divToShow = 'nav .menu';
const divPopup = document.querySelector(divToShow);
const divTrigger = document.querySelector('.m-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
            document.body.classList.add('menu-visible')
        }
    }, 250)
});

// automatically close by click outside menu

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divToShow);

    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
        document.body.classList.remove('menu-visible');
    }
})

// --- SEARCH
const sTrigger = document.querySelector('.s-trigger');
const addClass = document.querySelector('.site');

sTrigger.addEventListener('click', () => {
    addClass.classList.toggle('showsearch')
})
