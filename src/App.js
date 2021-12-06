import { Home } from './components/Home';
import {Title} from './components/NavBar'
import {List} from './components/List'
import {Elementos} from './components/ItemListContainer'
import {Counter} from './components/ItemCount'
import {ItemDetailConteiner} from './components/ItemDetailConteiner';
import { ItemDetail } from './components/ItemDetail';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return(
    <>
    <Title />
    <BrowserRouter>
    <Switch>
    <Route exact path="/Home" component={Home}>
      </Route>
      <Route exact path="/" component={Elementos}>
    </Route>

    <Route exact path="/Elementos/:Name" component={Elementos}>
    </Route>

    <Route exact path="*">
    <h1> Error pagina no encontrada </h1>
    </Route>
    </Switch>
    </BrowserRouter>
    </>
  )



}

export default App;
