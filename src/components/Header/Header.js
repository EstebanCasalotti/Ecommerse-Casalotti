import React from "react";
import {Link, BrowserRouter} from 'react-router-dom';
import App from "../../App";
import '../Header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export const Header = () => {
    return(
        <header className= 'header'>
            <div>
                <h1>
                    <BrowserRouter>
                        <Link to='/'className='logo'>
                            Casalotti-Ecommerse
                        </Link>
                    </BrowserRouter>

                </h1>
            </div>


            {/* links del header */}


            <div className='headerLinks'>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/Singup'>Singup</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/Cart' className='cart'><FontAwesomeIcon  icon = {faShoppingCart} /> </Link>
                    </li>
                </ul>
                </BrowserRouter>



            </div>


        </header>
    )


}
export default Header;