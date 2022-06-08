import ordersActionTypes from "./ordersActionTypes";

export const setAddressList = (data) => ({
    type: ordersActionTypes.SET_ADDRESS_LIST,
    payload: data
})

export const setOrdersList = (data) => ({
    type: ordersActionTypes.SET_ORDERS_LIST,
    payload: data
})

export const setPreviousNodeForChangeBacklight = (data) => ({
    type: ordersActionTypes.SET_PREVIOUS_NODE_FOR_CHANGE_BACKLIGHT,
    payload: data
})

export const setCurrentOrder = (data) => ({
    type: ordersActionTypes.SET_CURRENT_ORDER,
    payload: data
})

export const setMap = (data) => ({
    type: ordersActionTypes.SET_CURRENT_ORDER,
    payload: data
})