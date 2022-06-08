import {addressList} from "./addressList";
import {orders} from "./orders";

const mockDataProvider = async dataType => {
    if (dataType === 'orders') return orders
    if (dataType === 'addressList') return addressList
}

export default mockDataProvider