const interactions = () => {
    const burger = document.querySelector('.burger');
    const menuContainer = document.querySelector('.menu-container');
    const nav = document.querySelector('.menu-list');
    const navbarPages = document.querySelectorAll('.menu-list-item');
    const searcherIconContainer = document.querySelector('.searcher-icon-container');
    const searcher = document.querySelector('.searcher-container');
    burger.addEventListener('click', () => { /*Toggle Nav*/
        nav.classList.toggle('menu--active'); /*Animate Links*/
        navbarPages.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        }); /*Burger Animation*/
        burger.classList.toggle('toggle--burger');
    });
    searcherIconContainer.addEventListener('click', () => {
        searcher.classList.toggle('searcher--active');
        searcherIconContainer.classList.toggle('toggle--searcher');
    });
    window.addEventListener('scroll', () => 
    (window.scrollY || window.pageYOffset) > 0 ? 
    menuContainer.classList.add('menu-container--colored') : 
    menuContainer.classList.remove('menu-container--colored'));
};

window.onload = (event) => {
    console.log('page is fully loaded');
    interactions();
    };