import {CartWidget} from './CartWidget'
import NavBar from './NavBar.css'
import { Link, BrowserRouter,Switch} from 'react-router-dom'
export const Title = () => {
    return<>
        <header className= 'header'>
            <BrowserRouter>
                        <Link to="/" className='logo'>
                            Casalotti-Ecommerse
                        </Link>
            </BrowserRouter>


            <div className='headerLinks'>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/Singup'>Singup</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/Cart' className='cart'> <CartWidget /> </Link>
                    </li>
                </ul>
                </BrowserRouter>
            </div>
        </header>
    </>
}
