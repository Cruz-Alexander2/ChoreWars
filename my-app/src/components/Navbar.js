import React from "react";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                Logo
            </div>
            <ul className='navbar-menu'>
                <li><a href="/">Home</a></li>
                <li><a href="/chore">Chore</a></li>
                <li><a href="/login">Login</a></li>

            </ul>
        </div>
    )
}

export default Navbar