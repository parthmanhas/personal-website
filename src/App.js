import './App.scss';
import { useEffect } from 'react';

function App() {

  function scrollIntoView(id) {
    document.querySelector(`#${id}`).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }

  return (
    <>
    <header className='navbar'>
        <div className='navbar__container'>
        <div className='navbar__container--left'>
          <ul>
            <li>Logo</li>
            <li>Title</li>
          </ul>
        </div>
        <div className='navbar__container--right'>
          <ul>
            <li onClick={() => scrollIntoView('projects')}>Projects</li>
            <li onClick={() => scrollIntoView('about')}>About</li>
            <li onClick={() => scrollIntoView('contact')}>Contact</li>
          </ul>
        </div>
      </div>
      </header>
      <section id='intro' className='intro'>
        <div className='intro__container--animation'>
          <h1>Intro</h1>
        </div>
      </section>
      <section id='projects' className='projects'>
          <div className='projects__item'>
            <h1>Project 1</h1>
          </div>
          <div className='projects__item'>
            <h1>Project 2</h1>
          </div>
          <div className='projects__item'>
            <h1>Project 3</h1>
          </div>
          <div className='projects__item'>
            <h1>Project 4</h1>
          </div>
      </section>
      <section id='about' className='about'>
        <h1>About</h1>
      </section>
      <section id='contact' className='contact'>
        <h1>Contact</h1>
      </section>
      <footer className='footer'>
        <ul>
          <li>
            Instagram
          </li>
          <li>
            Reddit
          </li>
          <li>
            LinkedIn
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
