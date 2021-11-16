import React, { useContext } from 'react';
import { useState } from 'react';  
import { Elementos } from '../ItemListContainer';


export const CartContext = React.createContext();

export function ItemProvider({defaultValue = [], children}){
    const [cache, setCache] = useState(defaultValue);

    function getFromCache(id) {
        return cache.find(obj => obj.id === id)   
    }

    function isInCart(id) {
        return id === undefined ? undefined : getFromCache !== undefined
    }

    function addToCart(obj){
        if (isInCart(obj && obj.id)) {
            alert('no se puede agreagr un elemento duplicado');
            return;
        }
        Elementos([...setCache, obj]);
    }

    function deleteElement(obj){
        return cache.slice(obj.id)
    }
    
    function cacheClear(){
        return cache.clear()
    }
    return <CartContext.Provider value= {{cache, isInCart, addToCart, deleteElement, cacheClear}}>
            {children}
            </CartContext.Provider>
}