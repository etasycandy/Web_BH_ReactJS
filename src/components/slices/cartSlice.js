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
            const index = state.orderProducts.findIndex((value) =>
                value.id === action.payload.id && value.color === action.payload.color && value.size === action.payload.size)
            if(!action.payload.product) {
                state.orderProducts.splice(index, 1)
                return void(state.orderProducts)
            }
            state.orderProducts[index+1].quantity = action.payload.product.quantity
            state.orderProducts[index+1].priceTotal = action.payload.product.priceTotal
            return void(state.orderProducts)
        }
    }
})