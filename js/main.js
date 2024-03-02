import { WeatherApi } from './weatherapi.mjs';
import { DomManupilator } from './dommanupilator.mjs';

const form = document.getElementById('search');
const input = document.getElementById('query');
const icon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

const apiData = {
    key: 'c06b5b1fd8064290bc434949242502',
    baseUri: 'https://api.weatherapi.com/v1/current.json',
    query: '',
};

const dom = new DomManupilator(
    form,
    input,
    icon,
    temperature,
    city,
    humidity,
    wind,
);

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    apiData.query = dom.getInput();

    if (!apiData.query) return;

    await fetchAndShowWeather(apiData.baseUri, apiData.key, apiData.query);
});

window.addEventListener('load', async () => {
    // show the weather for some city when the page first loads
    apiData.query = 'auto:ip';
    await fetchAndShowWeather(apiData.baseUri, apiData.key, apiData.query);

    $(document).ready(() => {
        $('.card').fadeIn();
    });
});

async function fetchAndShowWeather(baseUri, key, query) {
    // fetch the weather of the city introduced
    const weather = new WeatherApi(baseUri, key, query);
    await weather.fetchWeather();

    // show the weather info
    dom.showAllInfo(
        weather.getIcon(),
        weather.getTemp(),
        weather.getCity(),
        weather.getHumidity(),
        weather.getWind(),
    );
}
