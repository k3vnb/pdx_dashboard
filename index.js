'use strict'

const weatherKey = '';
const igKey = '';
const meetUpKey = '';

function loadingSpinner(){
    const overlay = document.getElementById("loading-spinner-overlay");

    window.addEventListener('load', function(){
        overlay.style.display = 'none';
    });
}