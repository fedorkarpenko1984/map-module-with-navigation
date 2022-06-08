import ordersActionTypes from "./ordersActionTypes";

const INITIAL_STATE = {
    ordersList: [],
    addressList: [],
    previousNodeForChangeBacklight: null,
    currentOrder: null,
    map: null
}

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ordersActionTypes.SET_ORDERS_LIST:
            return {...state, ordersList: action.payload}
        case ordersActionTypes.SET_ADDRESS_LIST:
            return {...state, addressList: action.payload}
        case ordersActionTypes.SET_PREVIOUS_NODE_FOR_CHANGE_BACKLIGHT:
            return {...state, previousNodeForChangeBacklight: action.payload}
        case ordersActionTypes.SET_CURRENT_ORDER:
            return {...state, currentOrder: action.payload}
        case ordersActionTypes.SET_MAP:
            return {...state, map: action.payload}
        default:
            return state;
    }
}

export default ordersReducer