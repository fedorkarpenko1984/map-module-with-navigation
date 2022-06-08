import {useRef, useState} from 'react'
import './OrdersDelivery.css'

import Map from "../Map/Map";
import OrdersTable from "../OrdersTable/OrdersTable";
import {Provider} from "react-redux";
import store from "../../store/store";


// стартовые данные для карты(координаты центра и степень увеличения)
const myMapOptions = {
    center: [45.0428, 41.9734],
    zoom: 12
}


const OrdersDelivery = ({ width = '100%', height = '100%' }) => {

    const ordersDelivery = useRef(null)
    const movableBorder = useRef(null)
    const tableContainer = useRef(null)
    const mapContainer = useRef(null)

    const [borderMovingFlag, setBorderMovingFlag] = useState(false)

    // обработчик перетаскивания границы между списком заказов и картой
    const borderMoving = (event) => {
        if (!borderMovingFlag) return
        // определяем параметры основного контейнера(нужны ширина и расстояние от по координате Х от края страницы до контейнера)
        const ordersDeliveryContainerParams = ordersDelivery.current.getBoundingClientRect()
        const tableContainerWidth = event.clientX - ordersDeliveryContainerParams.x

        tableContainer.current.style.width = tableContainerWidth + 'px'
        mapContainer.current.style.width = ordersDeliveryContainerParams.width - tableContainerWidth + 'px'
    }

    return (
        <Provider store={store}>
            <section ref={ordersDelivery} className='orders-delivery' style={{width, height}}
                     onMouseUp={() => setBorderMovingFlag(false)} onMouseMove={event => borderMoving(event)}>

                <div ref={tableContainer} className="table-container">
                    <OrdersTable />
                </div>

                <div ref={movableBorder} className='movable-border' onMouseDown={() => setBorderMovingFlag(true)}></div>

                <div ref={mapContainer} className="map-container">
                    <Map options={myMapOptions} />
                </div>
            </section>
        </Provider>
    )
}

export default OrdersDelivery