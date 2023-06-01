import React from 'react'
import notetaker from '../../assets/notetaker.png'
import passwordgen from '../../assets/passwordgen.png'
import PJBooks from '../../assets/PJbooks.png'
import teambuildCL from '../../assets/teambuildCL.png'
import Musicblog from '../../assets/Musicblog.png'


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
      <div
          name="portfolio"
          className="bg-gradient-to-b from-black to-emerald-800 w-full text-white md:h-screen"
      >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
              <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                      Portfolio
                  </p>
                  <p className="py-6">Check out some of my work</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                  {projects.map(({ id, src, url, codeUrl }) => (
                      <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                          <img
                              src={src}
                              alt=""
                              className="rounded-md duration-200 hover:scale-105"
                          />
                          <div className="flex items-center justify-center">

                              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                              onClick={() => openLinkInNewTab(url)}
                              >
                                  Website
                              </button>
                              <button key={codeUrl} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                              onClick={() => openLinkInNewTab(codeUrl)}
                              >
                                  Code
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Projects