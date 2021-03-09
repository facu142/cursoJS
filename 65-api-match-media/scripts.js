/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString)

    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

const title = document.querySelector('#title');

const mql = matchMedia('(min-width:400px)');

console.log(mql);

const appyMatchMedia = (mql) => {
    mql.matches ? 
    document.body.style.backgroundColor = 'red' 
    :
    document.body.style.backgroundColor = 'royalblue' 
}

addEventListener('resize', () => {
    appyMatchMedia(mql);
})
addEventListener('DOMContentLoaded', () => {
    appyMatchMedia(mql);
})
    


