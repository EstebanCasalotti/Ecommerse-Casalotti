import { Elementos } from "./ItemListContainer";
import {Title} from './NavBar';
import {List} from './List';
import {Counter} from './ItemCount'
import {ItemDetailConteiner} from './ItemDetailConteiner';
import {CartContext} from './context/Cart';
export const Home = () => { 
    return(
        <> <CartContext.Provider> 
                <Title />
                <List /> 
                <Elementos />
                <ItemDetailConteiner />
                <Counter />
            </CartContext.Provider>
        </>
    )
}

