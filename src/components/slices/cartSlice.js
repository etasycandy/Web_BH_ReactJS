import {createSlice} from "@reduxjs/toolkit"

export default createSlice({
    name: "orders",
    initialState: {
        orderProducts: []
    },
    reducers: {
        addOrderProducts: (state, action) => {
            let index = state.orderProducts.findIndex((value) =>
                value.id === action.payload.id && value.color === action.payload.color && value.size === action.payload.size)
            if(index > -1) {
                state.orderProducts[index].quantity += action.payload.quantity
                state.orderProducts[index].priceTotal += action.payload.priceTotal
                return void(state.orderProducts)
            }
            return void(state.orderProducts.push(action.payload))
        },
        updateOrderProducts: (state, action) => {
            // if(!action.payload.product) {
            //     state.orderProducts.splice(action.payload.index, 1)
            //     return void(state.orderProducts)
            // }
            // state.orderProducts[action.payload.index] = action.payload.product
            // return void(state.orderProducts)
        }
    }
})