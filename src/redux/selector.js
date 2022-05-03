import {createSelector} from "@reduxjs/toolkit"

const selectorOrderProducts = (state) => state.orders.orderProducts

export const selectRemainingOrderProducts = createSelector(
      selectorOrderProducts, (orderProducts) => {
            return orderProducts
      }
)