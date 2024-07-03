import { useState } from 'react'
import './Header.css'
export function Header() {

    let [navShow, navShowSet] = useState(false);
    let icon = '&#9776;'

    let toggleBtn = ()=>{
        navShowSet(!navShow);

    }

    return (

        <div className="headerDiv">
            <header className={`custom-header ${navShow ? 'header-show' : '' }`}>

                <nav>
                    <ul>

                        <li>Home</li>
                        <li>About</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </nav>

            </header>

            <div className="mobile-header">

                
            {navShow ? <span onClick={toggleBtn}>&times;</span> : <span onClick={toggleBtn}>&#9776;</span>}

            </div>

        </div>
    )

}