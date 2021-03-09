/*
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/
 
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition,error,options);
})

const getPosition = (position) => {
     console.log(position);
}

const options = {
    enableHighAccuracy: true,
    timeout:5000,
    maximumAge: 0
}

const error = (err) => {
    console.log(error);
}

