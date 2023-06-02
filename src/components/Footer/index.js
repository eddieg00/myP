import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="content has-text-centered">
          <hr />
          {/* <div className="row-is-full">
            <strong> &copy; 2023</strong>
          </div> */}

          <ul>
            <a href="mailto:074015@gmail.com" title="Email"
              target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="m-3" size={42} />
            </a>

            <a href="https://github.com/eddieg00" title="GitHub Profile"
              target="_blank" rel="noopener noreferrer">
              <FaGithub className="m-3" size={42} />
            </a>

            <a href="https://www.linkedin.com/in/edward-gutierrez-a897a31a2/" title="LinkedIn Profile"
              target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="m-3" size={42} />
            </a>

            <a href="https://stackoverflow.com/users/21943697/edward-gutierrez" title="Stack Overflow"
              target="_blank" rel="noopener noreferrer">
              <FaStackOverflow className="m-3" size={42} />
            </a>

            <a href="https://twitter.com/eddieg00" title="Twitter Profile"
              target="_blank" rel="noopener noreferrer">
              <FaTwitter className="m-3 --bs-link-color: #0d6efd;
    /* --bs-link-hover-color: #0a58ca;" size={42} />
            </a>

            <a href="https://www.instagram.com/edwardgutierrez0/" title="Instagram Profile"
              target="_blank" rel="noopener noreferrer">
              <FaInstagram className="m-3" size={42} />
            </a>
          </ul>
          <div className="row-is-full ">
            &copy; 
          </div>
          <hr />

        </div>
      </footer>
    </div >
  );
}