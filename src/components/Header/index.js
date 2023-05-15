import React, {useState} from 'react';

function Header() {
    return (
        <header>
            <div>
                <h1>Edward Gutierrez</h1>
            </div>
            <nav>
                <ul>
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;