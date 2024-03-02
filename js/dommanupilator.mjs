export class DomManupilator {
    #form;

    #input;

    #icon;

    #temp;

    #city;

    #humidity;

    #wind;

    constructor(form, input, icon, temp, city, humidity, wind) {
        this.#form = form;
        this.#input = input;
        this.#icon = icon;
        this.#temp = temp;
        this.#city = city;
        this.#humidity = humidity;
        this.#wind = wind;
    }

    getInput() {
        return this.#input.value;
    }

    resetInput() {
        this.#form.reset();
    }

    #showIcon(icon) {
        this.#icon.src = icon;
    }

    #showTemp(temp) {
        this.#temp.textContent = `${temp}ºc`;
    }

    #showCity(city) {
        this.#city.textContent = `${city}`;
    }

    #showHumidity(humidity) {
        this.#humidity.textContent = `${humidity}%`;
    }

    #showWind(wind) {
        this.#wind.textContent = `${wind} km/h`;
    }

    showAllInfo(icon, temp, city, humidity, wind) {
        this.#showIcon(icon);
        this.#showTemp(temp);
        this.#showCity(city);
        this.#showHumidity(humidity);
        this.#showWind(wind);
    }
}
