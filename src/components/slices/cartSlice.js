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
            if(index > -1) {
                state.orderProducts[index].counter ++
                state.orderProducts[index].priceTotal += action.payload.price
                return void(state.orderProducts)
            }
            return void(state.orderProducts.push({
                priceTotal: action.payload.priceTotal,
                counter: action.payload.quantity,
                product: action.payload
            }))
        },
        updateOrderProducts: (state, action) => {
            const index = state.orderProducts.findIndex((value) => value.product.id === action.payload.id)
            if(!action.payload.product) {
                state.orderProducts.splice(action.payload.index, 1)
                return void(state.orderProducts)
            }
            state.orderProducts[action.payload.index] = action.payload.product
            return void(state.orderProducts)
        }
    }
})