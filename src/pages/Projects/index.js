import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import notetaker from '../../assets/notetaker.png';
import passwordgen from '../../assets/passwordgen.png';
import PJBooks from '../../assets/PJbooks.png';
import teambuildCL from '../../assets/teambuildCL.png';
import Musicblog from '../../assets/Musicblog.png';


const Projects = () => {
  const projects = [
      {
          id: 1,
          title: notetaker,
          src: notetaker,
          url: 'https://notetaker624.herokuapp.com/notes',
          codeUrl: 'https://github.com/eddieg00/expressnotes'

      },
      {
          id: 2,
          src: passwordgen,
          url: 'https://eddieg00.github.io/pass-word-safe/',
          codeUrl: 'https://github.com/eddieg00/pass-word-safe'
      },
      {
          id: 3,
          src: PJBooks,
          url: 'https://michaelmees99.github.io/PJ-Coders-Project1/',
          codeUrl: 'https://github.com/MichaelMees99/PJ-Coders-Project1'
      },
      {
          id: 4,
          src: teambuildCL,
          url: 'https://youtu.be/MU4xjFQhwIQ',
          codeUrl: 'https://github.com/eddieg00/myteam-oop'
      },
      {
          id: 5,
          src: Musicblog,
          url: 'https://music-blog.herokuapp.com/',
          codeUrl: 'https://github.com/eddieg00/tech-blogger'
      },
  ];

  const openLinkInNewTab = (url) => {
      window.open(url, '_blank');
  }

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-emerald-800 w-full text-white md:h-screen">
      <div className="container py-4">
        <h1 className="text-4xl font-bold pb-6 border-b-4 border-gray-500">Portfolio</h1>
        <p className="py-6">Check out some of my work</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map(({ id, src, url, codeUrl }) => (
            <div key={id} className="col">
              <Card className="shadow">
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <div className="d-grid gap-2">
                    <Button variant="primary" onClick={() => openLinkInNewTab(url)}>Website</Button>
                    <Button variant="secondary" onClick={() => openLinkInNewTab(codeUrl)}>Code</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects