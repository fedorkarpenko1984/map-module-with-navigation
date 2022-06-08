import {geocoding} from "../../utils/geocoding";
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import * as L from 'leaflet'
import 'leaflet-routing-machine'
import './Map.css'

const Map = ({ options }) => {

    //мок данные
    const addressList = useSelector(state => state.addressList)
    const currentOrder = useSelector(state => state.currentOrder);

    // переменная для хранения сущности Карты и Маршрута
    const map = useRef(null)
    const route = useRef(null)

    // инициализация карты
    useEffect(() => {
        map.current = L.map('map', options)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map.current);

    }, [])

    // при демонтаже компонента "уничтожаем" объект карты, иначе ошибка при перерисовке
    useEffect(() => {
        return () => {
            map.current.remove()
        }
    }, [])

    // при каждом изменении текущего заказа рисуем новый маршрут
    useEffect(() => {

        // если маршрут не выбран, выходим из хука
        if (!currentOrder) return

        const start = addressList.filter(address => address.name === currentOrder.start)[0].address
        const end = addressList.filter(address => address.name === currentOrder.end)[0].address


        Promise.all([geocoding(start), geocoding(end)]).then(results => {

            const [start, end] = results

            // если уже были отрисованые маршруты, то удаляем предыдущий
            if (route.current) {
                map.current.removeControl(route.current)
            }

            // добавление нового маршрута
            route.current = L.Routing.control({
                waypoints: [
                    L.latLng(start.lon, start.lat),
                    L.latLng(end.lon, end.lat)
                ],
                lineOptions: {styles: [{color: '#ff0059', weight: 2}]},
                draggableWaypoints: false
            })
            route.current.addTo(map.current)

        })

    }, [currentOrder])


    return (
        <div id='map'></div>
    )
}

export default Map

