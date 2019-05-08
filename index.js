'use strict'

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
    const {articles} = json;
    const el = document.getElementById('news-articles');
    for (let i=0; i<articles.length - 1; i++){
        //check titles to avoid rendering duplicate news articles
        if (articles[i].title !== articles[i+1].title){
            const node = document.createElement("LI");
            node.innerHTML = `
            <h4>${articles[i].title}</h4>
            ${articles[i].urlToImage ? `<img height=140 src=${articles[i].urlToImage} alt="article image" />` : `<h6>No Image</h6>`}
            <p>${json.articles[i].description}</p>
            <h5><a href="${json.articles[i].url}">Go to article</a></h5>
            `;
            el.appendChild(node);
        }
    }
}

function renderMeetUpResults(json){
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
          renderWeatherResults(responseJson)
        })
      .catch(error => {
          handleError(error);
    })
}

function formatDateString(){
    // we are requesting the NewsAPI fetch data with the 'from' parameter of three days ago, this function formats the date string for that request
    const date = new Date();
    const date1 = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    const threeDaysAgo = new Date(date1.setDate(date1.getDate()-3));
    return `${threeDaysAgo.getFullYear()}-${threeDaysAgo.getMonth() + 1}-${threeDaysAgo.getDate()}`;
}

function getNews(){
    const baseURL = 'https://newsapi.org/v2/everything?';
    const params = {
        q: 'portland%20oregon%20OR%20(pdx)%20OR%20(97214)',
        from: formatDateString(),
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
          renderNewsResults(responseJson)
        })
      .catch(error => {
          handleError(error);
    })
}

getWeather();
getNews();
loadingSpinner();