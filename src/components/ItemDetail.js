import { useEffect } from 'react/cjs/react.development';
import {Counter} from './ItemCount';
export function ItemDetail ({  item  }) {
    function onAdd(quantityToAdd){
        window.addEventListener('add', (onAdd) => {

        });
        return() => {window.removeEventListener('add', onAdd);
        <Counter />
    }
        
        
    }
    return <>
        <img src="zapato.png"/>
        <h1>zapato</h1>
        <h2>$2000</h2>
    </>
}