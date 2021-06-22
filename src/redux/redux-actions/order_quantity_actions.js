export const _IncrementOrderQuantity = (payload) => {

    return {
        type: "INCREMENT_ORDER_QUANTITY_DATA",
        payload: payload
    }
}

export const _DecrementOrderQuantity = (payload)=>{
    return {
        type: "DECREMENT_ORDER_QUANTITY_DATA",
        payload: payload
    }
}