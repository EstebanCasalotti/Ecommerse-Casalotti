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
    <Route exact path="/">
    <Elementos />
    </Route>



    <Route exact path="Home">
      <Home/>
      </Route>
    </Switch>
    </BrowserRouter>
    </>
  )



}

export default App;
