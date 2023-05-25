import React, {useState} from 'react';

function Header({changePage}) {
    return (
        <header>
            <div>
                <h1>Edward Gutierrez</h1>
            </div>
            <div className="profile-picture">
        <img src="/assets/IMG_6940[359] (2).jpg" alt="Profile Picture" />
      </div>
            <nav>
                <ul className="top-nav">
                    <li><a className="my-link" onClick={() => changePage("About")}>About</a></li>
                    <li><a className="my-link" onClick={() => changePage("Projects")}>Projects</a></li>
                    <li><a className="my-link" onClick={() => changePage("Contact")}>Contact</a></li>
                    <li><a className="my-link" onClick={() => changePage("Resume")}>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;