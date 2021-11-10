import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import {Title} from './components/NavBar'
import {List} from './components/List'
import {Elementos, ItemListContainer} from './components/ItemListContainer'
import {Counter} from './components/ItemCount'
import {ItemDetailConteiner} from './components/ItemDetailConteiner';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ItemDetail } from './components/ItemDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component = {<Home />}/>
        </Routes>
      </BrowserRouter>
    </>


    
  
  );
}

export default App;
