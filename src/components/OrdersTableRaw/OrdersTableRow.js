import './OrdersTableRow.css'
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentOrder, setOrdersList, setPreviousNodeForChangeBacklight} from "../../store/ordersActions";

const OrdersTableRow = ({ id, end, start }) => {

    const row = useRef(null)

    const dispatch = useDispatch();

    const ordersList = useSelector(state => state.ordersList)
    const addressList = useSelector(state => state.addressList)

    // сохраняем в сторе ссылку на предыдущий dom-узел для управления подсветкой
    const previousNodeForChangeBacklight = useSelector(state => state.previousNodeForChangeBacklight)

    // обработчик подсветки
    const changeTableRowBacklight = (row) => {
        if (previousNodeForChangeBacklight) {
            previousNodeForChangeBacklight.style.border = '1px solid grey'
        }
        dispatch(setPreviousNodeForChangeBacklight(row.current))
        row.current.style.border = '1px solid lightskyblue'
    }

    // geoPointType - начало или конец маршрута по заказу
    // обработчик смены точки маршрута
    const changeGeoPoint = (event, geoPointType = 'start') => {

        const newAddressName = addressList.filter(address => address.address === event.target.value)[0].name

        const newOrder = {id, start, end, [geoPointType]: newAddressName}

        const newOrdersList = ordersList.map(order => {
            if (order.id === newOrder.id) return newOrder
            return order
        })
        dispatch(setOrdersList(newOrdersList))
        dispatch(setCurrentOrder(newOrder))
    }



    return (
        <div ref={row} className='orders-table-row' onClick={() => {
            changeTableRowBacklight(row)
            dispatch(setCurrentOrder({id, start, end}))
        }}>

            <div className='table-cell table-row-cell'>{'Заказ №' + id}</div>


            <select className='table-cell select' onChange={event => changeGeoPoint(event)}>
                {
                    addressList.map(address => {
                        if (start === address.name) return <option selected value={address.address} key={address.address}>{address.name}</option>
                        return <option value={address.address} key={address.address}>{address.name}</option>
                    })
                }
            </select>


            <select className='table-cell select' onChange={event => changeGeoPoint(event, 'end')}>
                {
                    addressList.map(address => {
                        if (end === address.name) return <option selected value={address.address} key={address.address}>{address.name}</option>
                        return <option value={address.address} key={address.address}>{address.name}</option>
                    })
                }
            </select>

        </div>
    )
}

export default OrdersTableRow