export class WeatherApi {
    #uri;

    #data;

    constructor(baseUri, key, query) {
        this.baseUri = baseUri;
        this.key = key;
        this.query = query;
        this.#uri = `${baseUri}?key=${key}&q=${query}`;
    }

    async fetchWeather() {
        const response = await fetch(this.#uri);

        if (!response.ok) {
            return false;
        }

        this.#data = await response.json();
        return true;
    }

    getUri() {
        return this.#uri;
    }

    getIcon() {
        const size = '128x128';
        let iconUrl = this.#data.current.condition.icon;

        iconUrl = iconUrl.substring(2); // removed the '//'
        const split = iconUrl.split('/');
        split[2] = size;

        iconUrl = `https://${split.join('/')}`; // rejoin to make the url
        return iconUrl;
    }

    getTemp() {
        return this.#data.current.temp_c;
    }

    getCity() {
        return this.#data.location.name;
    }

    getHumidity() {
        return this.#data.current.humidity;
    }

    getWind() {
        return this.#data.current.wind_kph;
    }
}
