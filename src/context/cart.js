// import { useState,useContext,createContext } from "react";

// const initialState = {
//     cart :[],
//     cartItemCount: () =>0,
//     addToCart: ()=>null,
//     removeFromCart:()=>null,
//     decreaseQuantity:()=>null,
// }

// const CartContext=createContext(initialState);

// const useCart=()=>useContext(CartContext);

// const CartProvider =({children})=>{
//     const [cart,setCart]=useState(initialState.cart);

//     const cartItemCount =() =>{
//         return cart.reduce((acc,item)=>acc+item.quntity,0)
//     }
//     const addToCart=(product)=>{
//         const productIdx=cart.findIndex((item) =>item.product.id ===product.id)
//         if(product !== -1){ 
//             increaseQuntity(product.id)
//         } else{
//             setCart([...cart,{product,quntity:1}])
//         }
//     }
//     const removeFromCart =(productId)=>{
//         setCart(cart.filter((item)=>item.product.id))
//     }
//     const increaseQuntity=(productId)=>{
//         const copy =cart.slice()
//         const productIdx=copy.findIndex((item)=>item.product.id===productId)
//         if(productIdx!==-1){
//             copy[productIdx].quntity +=1
//             setCart(copy);
//         }
//     }
//     const decreaseQuantity=(productId)=>{
//         const copy=cart.slice();
//         const productIdx=copy.findIndex((item)=>item.product.id===productId)
//         if(productIdx!==-1 && copy[productIdx].quntity>1){
//             copy[productIdx].quntity -=1
//             setCart(copy);
//         }
//     }
//     return(
//         <CartContext.Provider  value={{cart, cartItemCount , addToCart,removeFromCart,increaseQuntity,decreaseQuantity}}>
           

//             {children}
//         </CartContext.Provider>
//     )
// }

// export {useCart,CartProvider}



import { createContext, useContext, useState } from "react"
import { Items } from "../components/item/item"

const initialState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
}

const CartContext = createContext(initialState)

const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialState.cart)

    const cartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (product) => {
        const productIdx = cart.findIndex((item) => item.product.id === product.id)
        if (productIdx !== -1) {
            increaseQuantity(product.id)
        } else {
            setCart([...cart, { product, quantity: 1 }])
        }
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId))
    }

    const increaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1) {
            copy[productIdx].quantity += 1
            setCart(copy)
        }
    }
console.log(cart)

    const decreaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1 && copy[productIdx].quantity > 1) {
            copy[productIdx].quantity -= 1
            setCart(copy)
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }