import { useEffect } from 'react';
import './App.scss';

function App() {

  window.addEventListener('scroll', (ev) => console.log(ev))

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
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      </header>
      <section className='intro'>
        <div className='intro__container--animation'>
          <h1>intro</h1>
        </div>
      </section>
      <section className='projects'>
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
