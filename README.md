## Модуль для построения маршрутов между двумя точками на карте

### `npm start`

Запуск сервера разработки на порту [http://localhost:3000](http://localhost:3000)

### Описание проекта

Проект выполнен по ТЗ в приложенном файле
Используется произвольный набор моковых данных, которые вынесены в отдельную папку

Основной код - React, Redux



Карта и маршруты - Leaflet и Leaflet Routing Machine

Геокодинг(преобразование адреса объекта в геоданные - широту и долготу) 
осуществляется через Yandex Geocoding и для запуска проекта в сборку нужно будет добавить
файл 

.env.local

с переменной 

REACT_APP_GEOCODING_SERVICE_API_KEY='ключ API для Yandex maps'

Так же для корректной работы карт нужно добавить в разметку ссылку на следующий файл(или скачать его)

< link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
