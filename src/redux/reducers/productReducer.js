import { ActionsTypes } from "../constants/actions-tyupe"

const initialState={
    products:[]
}

 export const ProductReducer =(state=initialState,{type,payload})=>{
switch(type){
case ActionsTypes.SET_PRODUCTS:
return {...state,products:payload}
default:
    return state;

}
}

export const selectedProductReducer =(state={},{type,payload})=>{
    switch(type){
        case ActionsTypes.SELECTED_PRODUCTS:
            return {...state,...payload}
            default:
              return  state;
    }
}
