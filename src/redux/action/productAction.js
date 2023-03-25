import { ActionsTypes } from "../constants/actions-tyupe"

export const setProducts=(products)=>{
return{
    type:ActionsTypes.SET_PRODUCTS,
    payload:products
}
}
export const selectedProducts=(product)=>{
return{
    type:ActionsTypes.SELECTED_PRODUCTS,
    payload:product
}
}