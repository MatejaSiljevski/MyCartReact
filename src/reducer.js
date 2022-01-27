// import { type } from "@testing-library/user-event/dist/type"

// const reducer = (state, action) => {
//     if(action.type === 'CLEAR_CART'){
//         return {...state, cart:[]}
//     }
//     if(action.type === 'REMOVE'){
//         return {...state, cart:state.cart.filter((cartItem) => cartItem.id !== action.payload )}
//     }
//     if(action.type === 'INCREASE'){
//         let tempCart = state.cart.map((cartItem) => {
//             if(cartItem.id === action.payload){
//                 return {...cartItem, amount: cartItem.amount + 1}
//             }
//             return cartItem
//         })
//         return {...state, cart:tempCart}
//     }
//     if(action.type === 'DECREASE'){
//         let tempCart = state.cart.map((cartItem) => {
//             if(cartItem.id === action.payload) {
//                 return {...cartItem, amount:cartItem.amount -1}
//             }
//             return cartItem
//         }).filter((cartItem) => cartItem.amount !== 0)
//         return {...state, cart:tempCart}
//     }
//    if(action.type === 'LOADING'){
//        return{...state, loading:true}
//    }
//    if(action.type === 'DISPLAY_ITEMS'){
//        return {...state, cart:action.payload, loading:false}
//    }
//    if(action.type === 'TOGGLE_AMOUNT'){
//        let newCart = state.cart.map((cartItem) => {
//            if(cartItem.id === action.payload.id) {
//                if(action.payload.type === 'dec'){
//                    return {...cartItem, amount:cartItem.amount - 1}
//                }
//                if(action.payload.type === 'inc'){
//                 return {...cartItem, amount:cartItem.amount + 1}
//                }
//            }
//            return cartItem
//        }).filter((cartItem) => cartItem.amount !== 0)
//        return {...state, cart:newCart}
//    }

//    if(action.type === 'GET_TOTALS'){
//        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => 
//        {
//             const {price, amount} = cartItem
//             const ItemTotal = price * amount

//             cartTotal.total += ItemTotal
//             cartTotal.amount += cartItem.amount
//             return cartTotal
//        },       
//        {
//            total:0,
//            amount:0
//        }
//        )
//        total = parseFloat(total.toFixed(2))
//        return {...state, total, amount}
//    }
// }
// export default reducer

const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state, cart:[]}
    }
    if(action.type === 'REMOVE'){
        let newCart = state.cart.filter((cartItem) => {
            return cartItem.id !== action.payload
        })
        return {...state, newCart}
    }
    if(action.type === 'TOGGLE_AMOUNT'){
        let newCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload.id){
                if(action.payload.type === 'inc'){
                    return {...cartItem, amount: cartItem.amount + 1}
                }
                if(action.payload.type === 'dec'){
                    return {...cartItem, amount: cartItem.amount -1}
                }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart:newCart}
    }
    if(action.type === 'GET_TOTALS'){
        let {amount, total} = state.cart.reduce((cartTotal, cartItem)=> {
            const {price, amount} = cartItem
            const itemTotal = price * amount

            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        },
        {
            amount:0,
            total:0
        }

        )
        total = parseFloat(total.toFixed(2))
        return {...state, total, amount}
    }
    if(action.type === 'LOADING'){
        return {...state, loading:true}
    }
    if(action.type === 'DISPLAY_ITEMS'){
        return {...state, cart:action.payload, loading:false}
    }
}

export default reducer