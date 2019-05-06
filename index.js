'use strict'


const igKey = '';
const meetUpKey = '';

function loadingSpinner(){
    const overlay = document.getElementById("loading-spinner-overlay");

    window.addEventListener('load', function(){
        overlay.style.display = 'none';
    });
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
  }

function renderResults(json){
    const el = document.getElementById('weather');
    const {temp, temp_min, temp_max} = json.main;
    el.innerHTML = `
        <ul>
            <li>Current Temp: ${temp}&#176 F</li>
            <li>Today's High: ${temp_min}&#176 F</li>
            <li>Today's Low: ${temp_max}&#176 F</li>
            <li>${json.weather[0].description}</li>
        </ul>
    `
}

function getWeather(){
    // api.openweathermap.org/data/2.5/weather?lat=45.5202&lon=-122.6742&appid=653c86db32d0605a0469a4863b99f2af


    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
    const params = {
        lat: 45.5202,
        lon: -122.6742,
        units: 'imperial',
        appid: '653c86db32d0605a0469a4863b99f2af'
    }
    const queryString = formatQueryParams(params);
    fetch(`${baseURL}${queryString}`)
    .then(response =>   {
        console.log(response)
        if (response.ok) {
            return response.json();
        } else {
          throw new Error('Oops. Something went wrong!');
        }
      })
      .then(responseJson => {
          renderResults(responseJson)
        })
      .catch(error => {
          handleError(error);
    })
}

getWeather();
loadingSpinner();