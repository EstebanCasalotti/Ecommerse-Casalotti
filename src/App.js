import logo from './logo.svg';
import './App.css';
import {Title} from './components/NavBar'
import {List} from './components/List'
import {Elementos, ItemListContainer} from './components/ItemListContainer'
import {Counter} from './components/ItemCount'
import {ItemDetailConteiner} from './components/ItemDetailConteiner';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <List />
        <ItemListContainer>
          <h2> Bienvenidos! </h2>
        </ItemListContainer>
        <Counter />
        <Elementos />
        <ItemDetailConteiner />


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  
  );
}

export default App;
