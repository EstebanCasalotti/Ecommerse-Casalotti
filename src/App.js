import logo from './logo.svg';
import './App.css';
import {Title} from './components/NavBar'
import {List} from './components/List'
import {Elementos, ItemListContainer} from './components/ItemListContainer'
import {Counter} from './components/ItemCount'
import {ItemDetailConteiner} from './components/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ItemDetail } from './components/ItemDetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <ItemDetail />
        </Route>
      </Routes>
    </BrowserRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <Title />
    //     <List />
    //     <ItemListContainer>
    //       <h2> Bienvenidos! </h2>
    //     </ItemListContainer>
    //     <Counter />
    //     <Elementos />
    //     <ItemDetailConteiner />


    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
  
  );
}

export default App;
