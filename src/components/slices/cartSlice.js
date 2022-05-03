import {createSlice} from "@reduxjs/toolkit"

export default createSlice({
    name: "orders",
    initialState: {
        orderProducts: []
    },
    reducers: {
        addOrderProducts: (state, action) => {
            return void(state.orderProducts.push(action.payload))
        },
        updateOrderProducts: (state, action) => {
            
        }
    }
})