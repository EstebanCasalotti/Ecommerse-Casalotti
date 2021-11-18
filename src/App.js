import {Header} from './components/Header/Header'
import { Home } from './components/Home';
import {Title} from './components/NavBar'
import {List} from './components/List'
import Rutas from './components/Routes/Routes';
import {Elementos, ItemListContainer, data} from './components/ItemListContainer'
import {Counter} from './components/ItemCount'
import {ItemDetailConteiner} from './components/ItemDetailConteiner';
import { BrowserRouter as Route} from "react-router-dom";
import { ItemDetail } from './components/ItemDetail';
function App() {

  const {Items} = data;
  return <div>
            <Header />
            <Rutas Items = {Items}/>
        </div>
}

export default App;
