import {createSlice} from "@reduxjs/toolkit"

export default createSlice({
    name: "orders",
    initialState: {
        orderProducts: []
    },
    reducers: {
        addOrderProducts: (state, action) => {
            let index = state.orderProducts.findIndex((value) =>
                value.product.id === action.payload.id && value.product.color === action.payload.color && value.product.size === action.payload.size)
            console.log(index)
            if(index > -1) {
                state.orderProducts[index].quantity += action.payload.quantity
                state.orderProducts[index].priceTotal += action.payload.price
                return void(state.orderProducts)
            }
            return void(state.orderProducts.push(action.payload))
        },
        updateOrderProducts: (state, action) => {
            if(!action.payload.product) {
                state.orderProducts.splice(action.payload.index, 1)
                return void(state.orderProducts)
            }
            state.orderProducts[action.payload.index] = action.payload.product
            return void(state.orderProducts)
        }
    }
})