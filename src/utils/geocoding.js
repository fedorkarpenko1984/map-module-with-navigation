import axios from "axios";

// геокодирование по адресу через yandex maps API
export const geocoding = async address => {

    // Создание кэша
    if (!geocoding.cash) {
        geocoding.cash = new Map()
    }
    if (geocoding.cash[address]) return geocoding.cash[address]

    // с помощью reg exp меняем  все пробелы на '+'
    const requestUrl = "https://geocode-maps.yandex.ru/1.x/?apikey=" + process.env.REACT_APP_GEOCODING_SERVICE_API_KEY +
        '&format=json&geocode=' + address.replace(/ /g, '+')

    //из json, приходящего от geocoding api, вынимаем только координаты
    const coords = (await axios(requestUrl)).data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos

    const handledCoords = {
        lat: coords.slice(0, coords.indexOf(' ')),
        lon: coords.slice(coords.indexOf(' ') + 1)
    }

    // кэшируем
    geocoding.cash[address] = handledCoords

    return handledCoords
}