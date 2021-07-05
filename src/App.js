import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 960) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  });

  
  return (
    <>
      <Navbar logo='Logo' title='Title' rightItems={['Projects', 'About', 'Contact']} />
      <section id="intro" className="intro">
        <div className="intro__container--animation">
          <h1>Intro</h1>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="projects__item">
          <h1>Project 1</h1>
        </div>
        <div className="projects__item">
          <h1>Project 2</h1>
        </div>
        <div className="projects__item">
          <h1>Project 3</h1>
        </div>
        <div className="projects__item">
          <h1>Project 4</h1>
        </div>
      </section>
      <section id="about" className="about">
        <h1>About</h1>
      </section>
      <section id="contact" className="contact">
        <h1>Contact</h1>
      </section>
      <footer className="footer">
        <ul>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Reddit</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
