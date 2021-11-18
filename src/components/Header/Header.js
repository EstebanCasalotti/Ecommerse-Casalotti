import React from "react";
import {Link} from 'react-router-dom';
import '../Header/Header.css';


export const Header = () => {
    return(
        <header className= 'header'>
            <div>
                <h1>
                    <Link to= '/' className = 'logo'>
                        Casalotti-Ecommerse
                    </Link>
                </h1>
            </div>
        </header>
    )


}
export default Header;