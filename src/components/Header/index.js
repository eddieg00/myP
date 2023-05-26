import React, {useState} from 'react';
import me from "../../assets/me.jpg"

function Header({changePage}) {
    return (
        <header classname= "head">
            <div className="profile-picture">
                <img src={me} alt="Profile Picture" />
            </div>
            <div>
                 <h1>Edward Gutierrez</h1>
                <nav>
                    <ul className="top-nav">
                        <li><a className="my-link" onClick={() => changePage("About")}>About</a></li>
                        <li><a className="my-link" onClick={() => changePage("Projects")}>Projects</a></li>
                        <li><a className="my-link" onClick={() => changePage("Contact")}>Contact</a></li>
                        <li><a className="my-link" onClick={() => changePage("Resume")}>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
 
export default Header;