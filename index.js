'use strict'


const igKey = '73974086bd0f4c9f809a956debb7c0a2';
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

function renderWeatherResults(json){
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
function renderNewsResults(json){
    console.log(json);
}

function getWeather(){
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
          renderNewsResults(responseJson)
        })
      .catch(error => {
          handleError(error);
    })
}

function getNews(){

    const baseURL = 'https://newsapi.org/v2/everything?';
    const params = {
        q: 'portland%oregon',
        from: '2019-05-03',
        sortby: 'relevance',
        language: 'en',
        apiKey: 'ad83316ad56944b7985882d4fc4b13db'
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
          renderWeatherResults(responseJson)
        })
      .catch(error => {
          handleError(error);
    })
}

getWeather();
getNews();
loadingSpinner();