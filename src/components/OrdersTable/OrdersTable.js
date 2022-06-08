import './OrdersTable.css'
import {useEffect} from "react";
import mockDataProvider from "../../mockData/mockDataProvider";
import {useDispatch, useSelector} from "react-redux";
import {setOrdersList, setAddressList} from "../../store/ordersActions";
import OrdersTableRow from "../OrdersTableRaw/OrdersTableRow";


const OrdersTable = () => {

    const dispatch = useDispatch();

    const orders = useSelector(state => state.ordersList);

    // получаем данные и ссохраняем в стор(моковые данные)
    useEffect(() => {
        mockDataProvider('orders').then(res => dispatch(setOrdersList(res)))
        mockDataProvider('addressList').then(res => dispatch(setAddressList(res)))
    }, [])

    return (
        <div className='orders-table'>

            <div  className="orders-table-top">
                <div className='table-cell table-top-cell'>Идентификатор</div>
                <div className='table-cell table-top-cell'>Начало</div>
                <div className='table-cell table-top-cell'>Конец</div>
            </div>

            {
                orders.map(order => <OrdersTableRow key={order.id} id={order.id} start={order.start} end={order.end} />)
            }

        </div>
    )
}

export default OrdersTable