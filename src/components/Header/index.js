import React, {useState} from 'react';

function Header({changePage}) {
    return (
        <header>
            <div>
                <h1>Edward Gutierrez</h1>
            </div>
            <nav>
                <ul>
                    <li><a onClick={() => changePage("About")}>About</a></li>
                    <li><a onClick={() => changePage("Projects")}>Projects</a></li>
                    <li><a onClick={() => changePage("Contact")}>Contact</a></li>
                    <li><a onClick={() => changePage("Resume")}>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;